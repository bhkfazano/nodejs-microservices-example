import * as grpc from '@grpc/grpc-js';

import { UserSvcService } from './protos/user/user_grpc_pb';
import UserController from './user.controller';

const server = new grpc.Server();
const userController = new UserController();

server.addService(UserSvcService, {
    createUser: userController.create,
    getUser: userController.getUser
});

export const start = () => {
    server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('User Service [gRPC]: Server running on port 50051');
    });
};