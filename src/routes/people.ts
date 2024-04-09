import { Router } from "express";
import { getPeople, getPeopleByName } from "../controllers/people.js";

const router = Router();

router.get('/', getPeople);
router.get('/:name', getPeopleByName);

export { router };