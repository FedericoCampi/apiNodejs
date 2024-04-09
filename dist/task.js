var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import cron from 'node-cron';
import { insertPeople } from './services/people.js';
import { insertFilms } from './services/films.js';
import { insertStarship } from './services/starships.js';
import { insertPlanets } from './services/planets.js';
export function runCronTask() {
    cron.schedule('10 22 * * *', () => __awaiter(this, void 0, void 0, function* () {
        try {
            const insertPeopleOnDB = yield insertPeople('https://swapi.dev/api/people');
            console.log(insertPeopleOnDB === null || insertPeopleOnDB === void 0 ? void 0 : insertPeopleOnDB.message);
            const insertFilmsOnDB = yield insertFilms('https://swapi.dev/api/films');
            console.log(insertFilmsOnDB === null || insertFilmsOnDB === void 0 ? void 0 : insertFilmsOnDB.message);
            const insertStarshipsOnDB = yield insertStarship('https://swapi.dev/api/starships');
            console.log(insertStarshipsOnDB === null || insertStarshipsOnDB === void 0 ? void 0 : insertStarshipsOnDB.message);
            const insertPlanetsOnDB = yield insertPlanets('https://swapi.dev/api/planets');
            console.log(insertPlanetsOnDB === null || insertPlanetsOnDB === void 0 ? void 0 : insertPlanetsOnDB.message);
        }
        catch (error) {
            console.error('Error al realizar tareas de inserción:', error);
        }
    }));
}
