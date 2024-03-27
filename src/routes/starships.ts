import { Router } from "express";
import { getStarships } from "../controllers/starships";

const router = Router();

router.get('/', getStarships);

export { router };