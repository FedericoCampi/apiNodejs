import axios from "axios";
import FilmRepository from "../repositories/FilmRepository.js";

const insertFilms = async (url: string) => {
    try {
        const response = await axios.get(url);
        const results = response.data.results;

        for (const result of results) {
            await FilmRepository.insertOrUpdateFilm(result);
        }

        return { message: "¡Todas las películas fueron insertadas o actualizadas exitosamente!" };
    } catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de films'};
    }
}

export { insertFilms };