import { getJeux, getJeu } from '../utils.js';
import { Router } from "express";
const router = Router();

router.get('/', (_, res) => res.render('home/accueil'));

router.get('/liste', async (_, res) => res.render('home/liste', { jeux : await getJeux() }));

router.get("/play/:id", async (req, res) => res.render('home/play', { jeu: await getJeu(req.params.id) }));

router.get('/ressources', (_, res) => res.render('home/ressources'));

export default router;