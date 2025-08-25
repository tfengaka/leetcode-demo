import { IHandler, IHasuraAction } from '@/types/common.type';
import { wrapperHandler } from '@/utils';
import { Router } from 'express';
import { me, sign_up, sync_social_account } from './user.action';

const router: Router = Router();

const handlers = [me, sign_up, sync_social_account] as IHandler[];

router.post(
  '',
  wrapperHandler<IHasuraAction>(handlers, (body) => ({
    name: body.action.name,
    payload: body.input,
    session_variables: body.session_variables,
  }))
);

export default router;
