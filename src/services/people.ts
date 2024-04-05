import PeopleModel from "../models/people";
import axios from "axios";
import { People } from '../interfaces/people.interface'

const insertPeople = async (url: string) => {
    
    const response = await axios.get(url);

    const results = response.data.results;

        try {
            results.forEach(async (result:People) => {
                
                const existingPerson = await PeopleModel.findOne({ name: result.name });
        
                if (existingPerson) {
                    await PeopleModel.findOneAndUpdate({ name: result.name }, result);
                } else {
                    await PeopleModel.create(result);
                }
            });
                
            return { message: "¡Todas las people fueron insertadas o actualizadas exitosamente!" };

        } catch (error) {

            console.error('Error al crear o actualizar datos:', error);
            return { error: 'Error al crear o actualizar datos people'};
        }
}

export { insertPeople };