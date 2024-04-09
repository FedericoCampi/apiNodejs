import { Router } from "express";
import { getFilmByName, getFilms } from "../controllers/films.js";
const router = Router();
router.get('/', getFilms);
router.get('/:name', getFilmByName);
export { router };
