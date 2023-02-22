import jeux from '../public/json/jeux.json' assert {type: 'json'};
import { Router } from "express";
const router = Router();

router.get('/', (_, res) => res.render('home/accueil'));

router.get('/liste', (_, res) => res.render('home/liste', {jeux : jeux}));

router.get("/play/:id", (req, res) => res.render('home/play', { jeu: jeux.find((jeu) => jeu.id === req.params.id) }));

router.get('/ressources', (_, res) => res.render('home/ressources'));

export default router;