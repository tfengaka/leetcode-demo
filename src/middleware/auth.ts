import { AppDataSource } from '@/config/database';
import User from '@/entities/User.entity';
import { HasuraHeader, Role } from '@/enum/common.enum';
import { authFirebase } from '@/libs/firebase';
import { Request, Response, Router } from 'express';

const router: Router = Router();

router.get('', async (req: Request, res: Response) => {
  try {
    const token = req.headers?.authorization;
    if (!token)
      return res.json({
        [HasuraHeader.Role]: Role.Anonymous,
      });

    const decodeToken = await authFirebase.verifyIdToken(token);

    if (!decodeToken) {
      return res.sendStatus(401);
    }

    const UserRepository = AppDataSource.getRepository(User);

    const firebase_id = decodeToken.uid;

    const user = await UserRepository.findOne({
      where: { id: firebase_id },
    });

    if (!user)
      return res.json({
        [HasuraHeader.Role]: Role.Anonymous,
      });

    return res.json({
      [HasuraHeader.Role]: user.role,
      [HasuraHeader.UserId]: firebase_id,
    });
  } catch (error) {
    return res.sendStatus(401);
  }
});

export default router;
