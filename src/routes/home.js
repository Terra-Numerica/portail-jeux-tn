import jeux from '../public/json/jeux.json' assert {type: 'json'};
import { Router } from "express";
const router = Router();

router.get('/', (req, res) => res.render('home/accueil'));

router.get('/liste', (req, res) => res.render('home/liste', {jeux : jeux}));

router.get('/ressources', (req, res) => res.render('home/ressources'))

export default router;