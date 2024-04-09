import axios from "axios";
import StarshipRepository from "../repositories/StarshipRepository.js";

const insertStarship = async (url: string) => {
    try {
        const response = await axios.get(url);
        const results = response.data.results;

        for (const result of results) {
            await StarshipRepository.insertOrUpdateStarships(result);
        }

        return { message: "¡Todas las starships fueron insertadas o actualizadas exitosamente!" };
    } catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de starships'};
    }
}

export { insertStarship };