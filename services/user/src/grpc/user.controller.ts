import * as grpc from '@grpc/grpc-js';
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { createUserSchema } from "./validation/create-user.validation";
import { getUserSchema } from "./validation/get-user.validation";
import { validate } from "../../../../common/helpers/validate";
import { CreaterRequest, UserResponse, GetUserRequest } from './protos/user/user_pb';
import { IUserSvcServer } from "./protos/user/user_grpc_pb";
import UserService from "../user.service";
import { errorHandler } from '../../../../common/helpers/error-handler';


export default class UserController implements IUserSvcServer {
    [method: string]: any;

    constructor(
        private readonly userService: UserService
    ) {}

    public async create(call: ServerUnaryCall<CreaterRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
        try {
            validate(createUserSchema, call.request.toObject());
            const newUser = await this.userService.createUser(call.request.getEmail(), call.request.getPassword());
            const userResponse: UserResponse = new UserResponse();
            userResponse.setId(newUser.id);
            userResponse.setEmail(newUser.email);
            callback(null, userResponse);
        } catch (error: any) {errorHandler(error, callback)} 
    }
    
    public async getUser(call: ServerUnaryCall<GetUserRequest, UserResponse>, callback: sendUnaryData<UserResponse>): Promise<void> {
        try {
            validate(getUserSchema, call.request.toObject());
            const user = await this.userService.getUser(call.request.getId());
            const userResponse: UserResponse = new UserResponse();
            userResponse.setId(user.id);
            userResponse.setEmail(user.email);
            callback(null, userResponse);
        } catch (error: any) {errorHandler(error, callback)}
    }
}