import { Router } from "express";
import { getStarshipByName, getStarships } from "../controllers/starships";

const router = Router();

router.get('/', getStarships);
router.get('/:name', getStarshipByName);

export { router };