import { Router } from "express";
import { getPlanets } from "../controllers/planets";

const router = Router();

router.get('/', getPlanets);

export { router };