import { OperandType } from '@/enum/common.enum';
import { Request, Response } from 'express';

export type IHasuraAction<Payload = Record<string, any>> = {
  action: {
    name: string;
  };
  input: Payload;
  session_variables: Record<string, string>;
};

export type IHasuraEvent<Payload = Record<string, any>> = {
  trigger: {
    name: string;
  };
  event: {
    data: Payload;
    op: OperandType;
    session_variables: Record<string, string>;
  };
};

export type IHasuraCronjob<Payload = Record<string, any>> = {
  id: string;
  name: string;
  payload: Payload;
  schedule_time: string;
};

export type IContextHandler<Payload = Record<string, any>> = {
  req: Request;
  res: Response;
  op?: OperandType;
  payload: Payload;
  session_variables?: Record<string, string>;
};
export type IHandler<Payload = Record<string, any>, Result = Record<string, any>> = (
  context: IContextHandler<Payload>
) => Promise<Result> | unknown;
export type IFormInput<T> = {
  form: T;
};
