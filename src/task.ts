import cron from 'node-cron';
import { insertPeople } from './services/people';
import { insertFilms } from './services/films';
import { insertStarShips } from './services/starships';
import { insertPlanets } from './services/planets';

export  function runCronTask() {
    cron.schedule('16 18 * * *', async () => {
        
        try {
            const insertPeopleOnDB = await insertPeople('https://swapi.dev/api/people');
            console.log(insertPeopleOnDB?.message);

            const insertFilmsOnDB = await insertFilms('https://swapi.dev/api/films');
            console.log(insertFilmsOnDB?.message); 

            const insertStarshipsOnDB = await insertStarShips('https://swapi.dev/api/starships');
            console.log(insertStarshipsOnDB?.message);

            const insertPlanetsOnDB = await insertPlanets('https://swapi.dev/api/planets');
            console.log(insertPlanetsOnDB?.message);

        } catch (error) {
            console.error('Error al realizar tareas de inserción:', error);
        }

    });
}