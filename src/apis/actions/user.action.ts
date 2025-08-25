import { AppDataSource } from '@/config/database';
import { ErrorMessages } from '@/constant';
import User from '@/entities/User.entity';
import { AuthProvider, ErrorCode, HasuraHeader, Role } from '@/enum/common.enum';
import { authFirebase } from '@/libs/firebase';
import { IFormInput, IHandler } from '@/types/common.type';
import { SignUpInput, SyncSocialAccountInput } from '@/types/user.type';
import { GraphQLError } from 'graphql';

export const me: IHandler<null, User> = async ({ session_variables }) => {
  try {
    const id = session_variables?.[HasuraHeader.UserId] || '';
    const UserRepository = AppDataSource.getRepository(User);
    const user = await UserRepository.findOne({
      where: { id },
      select: { id: true, email: true, display_name: true, role: true },
    });

    return user;
  } catch (error) {
    const err = error as Error;

    throw new GraphQLError(err.message, {
      extensions: { code: ErrorCode.INTERNAL_SERVER_ERROR },
    });
  }
};

export const sign_up: IHandler<IFormInput<SignUpInput>, { code: string }> = async ({ payload, res }) => {
  try {
    const { email, password, display_name } = payload.form;

    const UserRepository = AppDataSource.getRepository(User);

    const alreadyExist = await UserRepository.findOne({
      where: { email },
      select: { id: true },
    });

    if (alreadyExist) {
      throw new GraphQLError(ErrorMessages.ALREADY_EXISTED, {
        extensions: { code: ErrorCode.ALREADY_EXISTED },
      });
    }

    const firebaseAccount = await authFirebase.createUser({ email, password, displayName: display_name });

    const user = new User();
    user.id = firebaseAccount.uid;
    user.email = email;
    user.display_name = display_name;
    user.role = Role.Student;
    user.provider = AuthProvider.Password;
    await UserRepository.save(user);

    return res.status(200).json({ code: 'register_successful' });
  } catch (error) {
    console.error(error);
    throw new GraphQLError(ErrorMessages.INTERNAL_SERVER_ERROR, {
      extensions: { code: ErrorCode.INTERNAL_SERVER_ERROR },
    });
  }
};

export const sync_social_account: IHandler<IFormInput<SyncSocialAccountInput>, { message: string }> = async ({
  payload,
  res,
}) => {
  try {
    const { token } = payload.form;

    const decodedToken = await authFirebase.verifyIdToken(token);
    const UserRepository = AppDataSource.getRepository(User);
    const alreadyExist = await UserRepository.findOne({
      where: { id: decodedToken.uid },
      select: { id: true },
    });

    if (alreadyExist) {
      return res.status(200).json({ message: 'DONE' });
    }

    const { email, displayName, providerData } = await authFirebase.getUser(decodedToken.uid);

    const user = new User();
    user.id = decodedToken.uid;
    user.email = email || '';
    user.display_name = displayName || '';
    user.role = Role.Student;
    user.provider = providerData[0].providerId as AuthProvider;
    await UserRepository.save(user);

    return res.status(200).json({ message: 'DONE' });
  } catch (error) {
    console.error(error);
    throw new GraphQLError(ErrorMessages.INTERNAL_SERVER_ERROR, {
      extensions: { code: ErrorCode.INTERNAL_SERVER_ERROR },
    });
  }
};
