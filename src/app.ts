import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes/index.js'
import db from './config/mongo.js'
import { runCronTask } from './task.js';
import compression from 'compression';
import helmet from 'helmet';

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(compression());
app.use(helmet());
app.use(router);
db().then(() => console.log('Conexión DB ready'));

runCronTask();

app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`))