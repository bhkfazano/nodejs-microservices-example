import 'express-async-errors';
import express from 'express';

import { userRouter } from './routes/v1'; 
import { errorHandler } from '../../../common/middlewares/error-handler';
import { errorConverter } from '../../../common/middlewares/error-converter';
import * as AuthDataSource from './database/data-source';

AuthDataSource.init();

const app = express();

app.use(express.json());

app.use('/api/v1/auth', userRouter);

app.use(errorConverter);
app.use(errorHandler);


app.listen(3000, () => {
    console.log('Auth Service [REST]: Server running on port 3000');
});