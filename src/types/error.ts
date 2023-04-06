import { ERROR } from 'constants/';

const {
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT,
  UNSUPPORTED_MEDIA_TYPE,
  INTERNAL_SERVER_ERROR,
} = ERROR;

type ErrorCodes =
  | (typeof BAD_REQUEST)[keyof typeof BAD_REQUEST]
  | (typeof UNAUTHORIZED)[keyof typeof UNAUTHORIZED]
  | (typeof FORBIDDEN)[keyof typeof FORBIDDEN]
  | (typeof NOT_FOUND)[keyof typeof NOT_FOUND]
  | (typeof CONFLICT)[keyof typeof CONFLICT]
  | (typeof UNSUPPORTED_MEDIA_TYPE)[keyof typeof UNSUPPORTED_MEDIA_TYPE]
  | (typeof INTERNAL_SERVER_ERROR)[keyof typeof INTERNAL_SERVER_ERROR];

export interface ErrorForm {
  message?: string | ErrorCodes;
  status?: number;
}
