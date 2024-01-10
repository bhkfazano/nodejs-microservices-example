// package: com.kogab.microservices.user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";

interface IUserSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IUserSvcService_Icreate;
    getUser: IUserSvcService_IgetUser;
}

interface IUserSvcService_Icreate extends grpc.MethodDefinition<user_pb.CreaterRequest, user_pb.UserResponse> {
    path: "/com.kogab.microservices.user.UserSvc/create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.CreaterRequest>;
    requestDeserialize: grpc.deserialize<user_pb.CreaterRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserSvcService_IgetUser extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.UserResponse> {
    path: "/com.kogab.microservices.user.UserSvc/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}

export const UserSvcService: IUserSvcService;

export interface IUserSvcServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<user_pb.CreaterRequest, user_pb.UserResponse>;
    getUser: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.UserResponse>;
}

export interface IUserSvcClient {
    create(request: user_pb.CreaterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.CreaterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    create(request: user_pb.CreaterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserSvcClient extends grpc.Client implements IUserSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: user_pb.CreaterRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.CreaterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public create(request: user_pb.CreaterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
