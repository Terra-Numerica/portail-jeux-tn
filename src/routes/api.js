import { getJeux } from '../utils.js';
import { Router } from "express";
const router = Router();

router.get("/jeux", async (req, res) => res.json(await getJeux(req.url.split("/jeux")[1])));

export default router;