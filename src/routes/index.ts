import { Router } from "express";
import { getStarshipByName, getStarships } from "../controllers/starships.js";
import { getPlanetByName, getPlanets } from "../controllers/planets.js";
import { getFilmByName, getFilms } from "../controllers/films.js";
import { getPeople, getPeopleByName } from "../controllers/people.js";

const router = Router();

router.get('/starships', getStarships);
router.get('/starships/:name', getStarshipByName);

router.get('/planets', getPlanets);
router.get('/planets/:name', getPlanetByName);

router.get('/films', getFilms);
router.get('/films/:name', getFilmByName);

router.get('/', getPeople);
router.get('/:name', getPeopleByName);

export { router };