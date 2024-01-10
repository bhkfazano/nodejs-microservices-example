// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');

function serialize_com_kogab_microservices_user_CreaterRequest(arg) {
  if (!(arg instanceof user_pb.CreaterRequest)) {
    throw new Error('Expected argument of type com.kogab.microservices.user.CreaterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_kogab_microservices_user_CreaterRequest(buffer_arg) {
  return user_pb.CreaterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_kogab_microservices_user_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type com.kogab.microservices.user.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_kogab_microservices_user_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_kogab_microservices_user_UserResponse(arg) {
  if (!(arg instanceof user_pb.UserResponse)) {
    throw new Error('Expected argument of type com.kogab.microservices.user.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_kogab_microservices_user_UserResponse(buffer_arg) {
  return user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserSvcService = exports.UserSvcService = {
  create: {
    path: '/com.kogab.microservices.user.UserSvc/create',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.CreaterRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_com_kogab_microservices_user_CreaterRequest,
    requestDeserialize: deserialize_com_kogab_microservices_user_CreaterRequest,
    responseSerialize: serialize_com_kogab_microservices_user_UserResponse,
    responseDeserialize: deserialize_com_kogab_microservices_user_UserResponse,
  },
  getUser: {
    path: '/com.kogab.microservices.user.UserSvc/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.UserResponse,
    requestSerialize: serialize_com_kogab_microservices_user_GetUserRequest,
    requestDeserialize: deserialize_com_kogab_microservices_user_GetUserRequest,
    responseSerialize: serialize_com_kogab_microservices_user_UserResponse,
    responseDeserialize: deserialize_com_kogab_microservices_user_UserResponse,
  },
};

exports.UserSvcClient = grpc.makeGenericClientConstructor(UserSvcService);
