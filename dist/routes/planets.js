import { Router } from "express";
import { getPlanetByName, getPlanets } from "../controllers/planets.js";
const router = Router();
router.get('/', getPlanets);
router.get('/:name', getPlanetByName);
export { router };
