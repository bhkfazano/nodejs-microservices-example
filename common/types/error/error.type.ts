export enum ErrorType {
    BadRequest = 'BAD_REQUEST',
    NotFound = 'NOT_FOUND',
    InternalServerError = 'INTERNAL_SERVER_ERROR',
    Forbidden = 'FORBIDDEN',
    Unauthorized = 'UNAUTHORIZED',
    Conflict = 'CONFLICT',
    UnprocessableEntity = 'UNPROCESSABLE_ENTITY',
    TooManyRequests = 'TOO_MANY_REQUESTS',
    RequestTimeout = 'REQUEST_TIMEOUT',
    PayloadTooLarge = 'PAYLOAD_TOO_LARGE',
    UnsupportedMediaType = 'UNSUPPORTED_MEDIA_TYPE',
    MethodNotAllowed = 'METHOD_NOT_ALLOWED',
}