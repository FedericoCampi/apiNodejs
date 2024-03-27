import { Router } from "express";
import { getFilms } from "../controllers/films";

const router = Router();

router.get('/', getFilms);

export { router };