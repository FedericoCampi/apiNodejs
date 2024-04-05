import axios from "axios";
import PlanetModel from "../models/planet";
import { Planet } from "../interfaces/planet.interface";

const insertPlanets = async (url: string) => {
    
    const response = await axios.get(url);

    const results = response.data.results;
    
        try {
            results.forEach(async (result: Planet) => {
                const existingPerson = await PlanetModel.findOne({ name: result.name });
        
                if (existingPerson) {
                    await PlanetModel.findOneAndUpdate({ name: result.name }, result);
                } else {
                    await PlanetModel.create(result);
                }
            });
            return { message: "¡Todas los planets fueron insertadas o actualizadas exitosamente!" };
        } catch (error) {
            console.error('Error al crear o actualizar datos:', error);
            return { error: 'Error al crear o actualizar datos de planets'};
        }
}

export { insertPlanets };