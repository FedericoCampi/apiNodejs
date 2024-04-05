import axios from "axios";
import StarshipModel from "../models/starship";
import { Starship } from "../interfaces/starship.interface";

const insertStarShips = async (url: string) => {
    
    const response = await axios.get(url);

    const results = response.data.results;

        try {
            results.forEach(async (result: Starship) => {
                const existingPerson = await StarshipModel.findOne({ name: result.name });
        
                if (existingPerson) {
                    await StarshipModel.findOneAndUpdate({ name: result.name }, result);
                } else {
                    await StarshipModel.create(result);
                }
            });
            return { message: "¡Todas las starships fueron insertadas o actualizadas exitosamente!" };
        } catch (error) {
            console.error('Error al crear o actualizar datos:', error);
            return { error: 'Error al crear o actualizar datos de starships'};
        }
}

export { insertStarShips };