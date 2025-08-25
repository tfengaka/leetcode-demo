export enum HasuraHeader {
  UserId = 'x-hasura-user-id',
  Role = 'x-hasura-role',
}

export enum Role {
  Anonymous = 'anonymous',
  Student = 'student',
  Teacher = 'teacher',
  Admin = 'admin',
}

export enum OperandType {
  Insert = 'INSERT',
  Update = 'UPDATE',
  Delete = 'DELETE',
  Manual = 'MANUAL',
}

export enum AuthProvider {
  Phone = 'phone',
  Password = 'password',
  Google = 'google.com',
  Facebook = 'facebook.com',
  Twitter = 'twitter.com',
  GitHub = 'github.com',
  Apple = 'apple.com',
  Yahoo = 'yahoo.com',
  Microsoft = 'microsoft.com',
}

export enum ErrorCode {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  HANDLER_NOT_FOUND = 'NOT_FOUND_HANDLER',
  ALREADY_EXISTED = 'ALREADY_EXISTED',
}
