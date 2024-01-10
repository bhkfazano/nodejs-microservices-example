import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { CreateUserDto } from "../../../../common/dtos/user/create-user.dto";
import { CreaterRequest, UserResponse, GetUserRequest } from './protos/user/user_pb';
import { IUserSvcServer } from "./protos/user/user_grpc_pb";


export default class UserController implements IUserSvcServer {
    [method: string]: any;

    public async create(call: ServerUnaryCall<CreaterRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
        console.log(call)
        const createUserDto: CreateUserDto = {
            email: call.request.getEmail(),
            password: call.request.getPassword()
        };
        const userResponse: UserResponse = new UserResponse();
        callback(null, userResponse);
    }
    
    public async getUser(call: ServerUnaryCall<GetUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
        console.log(call.request.getId())
        const userResponse: UserResponse = new UserResponse();
        callback(null, userResponse);
    }
}