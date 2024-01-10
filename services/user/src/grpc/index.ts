import * as grpc from '@grpc/grpc-js';

import { UserSvcService } from './protos/user/user_grpc_pb';
import UserController from './user.controller';
import UserService from '../user.service';
import UserRepository from '../user.repository';
import { userDataSource } from '../database/data-source';
import { User } from '../database/entities/user.entity';

const server = new grpc.Server();
const userRespository = userDataSource.getRepository(User).extend(UserRepository);
const userService = new UserService(userRespository);
const userController = new UserController(userService);

server.addService(UserSvcService, {
    create: userController.create.bind(userController),
    getUser: userController.getUser.bind(userController),
});

export const start = () => {
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('User Service [gRPC]: Server running on port 50051');
    });
};