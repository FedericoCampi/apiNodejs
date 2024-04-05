import axios from "axios";
import PlanetRepository from "../repositories/PlanetRepository";

const insertPlanets = async (url: string) => {
    try {
        const response = await axios.get(url);
        const results = response.data.results;

        for (const result of results) {
            await PlanetRepository.insertOrUpdatePlanet(result);
        }

        return { message: "¡Todas los planetas fueron insertados o actualizados exitosamente!" };
    } catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de planets'};
    }
}

export { insertPlanets };