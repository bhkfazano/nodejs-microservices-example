import { UserDto } from "../dtos/user/user.dto";

declare interface ErrorConstructor {
    captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
}

declare global {
    namespace Express {
        interface Request {
            currentUser?: UserDto
        }
    }
}