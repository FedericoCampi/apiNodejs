import cron from 'node-cron';
import { insertPeople } from './services/people.js';
import { insertFilms } from './services/films.js';
import { insertStarship } from './services/starships.js';
import { insertPlanets } from './services/planets.js';

export function runCronTask() {
    cron.schedule('10 22 * * *', async () => {
        
        try {
            const insertPeopleOnDB = await insertPeople('https://swapi.dev/api/people');
            console.log(insertPeopleOnDB?.message);

            const insertFilmsOnDB = await insertFilms('https://swapi.dev/api/films');
            console.log(insertFilmsOnDB?.message); 

            const insertStarshipsOnDB = await insertStarship('https://swapi.dev/api/starships');
            console.log(insertStarshipsOnDB?.message);

            const insertPlanetsOnDB = await insertPlanets('https://swapi.dev/api/planets');
            console.log(insertPlanetsOnDB?.message);

        } catch (error) {
            console.error('Error al realizar tareas de inserción:', error);
        }

    });
}