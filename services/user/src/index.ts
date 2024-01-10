import { start as startGrpcServer } from './grpc';
import { init as initDataSource } from './database/data-source';

initDataSource();
startGrpcServer();