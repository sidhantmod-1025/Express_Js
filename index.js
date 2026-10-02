import express from 'express'
import{handleUsers} from './controller/userController.js';

const app = express();

app.set('view engine','ejs')
app.get('/user2',handleUsers)

app.listen(4000);