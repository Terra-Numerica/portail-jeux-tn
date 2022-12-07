import { Router } from "express";
const router = Router();

router.get('/', (req, res) => res.render('home/accueil'));

router.get('/liste', (req, res) => res.render('home/liste'));

router.get('/ressources', (req, res) => res.render('home/ressources'))

export default router;