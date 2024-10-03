import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';
import {getUsers} from './controllers/user.js';

userRoutes.get('/', getUsers);

const app = express();

app.use(express.json());
app.use(cors())

app.use('/', userRoutes)

app.listen(3003);