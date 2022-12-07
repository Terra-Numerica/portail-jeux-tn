import express from 'express';
import { resolve } from 'path';

const app = express();

// Middlewares
app.set('views', resolve('./src/views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(resolve('./src/public')));
app.use(express.json());

app.get('/', (req, res) => res.render('home'));

app.get('*', (req, res) => res.status(404).render('errors/404'));

app.listen(3000, () => console.log('[Portail-TN] Listen on port 3000'));