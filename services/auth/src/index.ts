import express from 'express';
import { userRouter } from './routes/v1'; 

const app = express();

app.use(express.json());

app.use('/api/v1/auth', userRouter);

app.listen(3000, () => {
    console.log('Auth Service: Listening on port 3000');
});