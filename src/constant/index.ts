import { ErrorCode } from '@/enum/common.enum';

export const ErrorMessages = {
  [ErrorCode.INTERNAL_SERVER_ERROR]: 'Internal Server Error!',
  [ErrorCode.HANDLER_NOT_FOUND]: 'Not Found Handler!',
  [ErrorCode.ALREADY_EXISTED]: 'Already Existed!',
};
