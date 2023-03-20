import { resolve } from 'path';
import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

// Remove warnings
process.removeAllListeners("warning");

// Middlewares
app.set('views', resolve('./src/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve('./src/public')));
app.use(express.json());
app.use(cors())

// Route
import homeRoute from './routes/home.js';
import apiRoute from './routes/api.js';

app.use('/', homeRoute);
app.use('/api', apiRoute);

app.get('*', (req, res) => res.status(404).render('errors/404'));

const port = process.env.port || 3000;
app.listen(port, () => console.log(`[Portail-TN] Listen on port ${port}`));