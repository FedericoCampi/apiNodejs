import axios from "axios";
import PeopleRepository from "../repositories/PeopleRepository.js";

const insertPeople = async (url: string) => {
    try {
        const response = await axios.get(url);
        const results = response.data.results;

        for (const result of results) {
            await PeopleRepository.insertOrUpdatePeople(result);
        }

        return { message: "¡Todas las personas fueron insertadas o actualizadas exitosamente!" };
    } catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de people'};
    }
}

export { insertPeople };