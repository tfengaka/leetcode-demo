import { ErrorMessages } from '@/constant';
import { ErrorCode, OperandType } from '@/enum/common.enum';
import { IHandler } from '@/types/common.type';
import { Request, Response } from 'express';
import { GraphQLError } from 'graphql';

export function wrapperHandler<Body = Record<string, any>>(
  handler: IHandler[],
  request: (body: Body) => {
    name: string;
    op?: OperandType;
    payload: Record<string, any>;
    session_variables?: Record<string, string>;
    scheduled_time?: string;
  }
) {
  return async (req: Request, res: Response) => {
    try {
      const { name, payload, op, session_variables } = request(req.body);
      const targetHandler = handler.find((e) => e.name === name);

      if (!targetHandler) {
        const event_error = new GraphQLError(ErrorMessages[ErrorCode.HANDLER_NOT_FOUND], {
          extensions: {
            code: ErrorCode.HANDLER_NOT_FOUND,
          },
        });
        return res.status(404).json(event_error);
      }

      const res_data = await targetHandler({ req, res, op, payload, session_variables });

      return res.json(res_data);
    } catch (error) {
      console.error(error);
      return res.status(400).json(error);
    }
  };
}
