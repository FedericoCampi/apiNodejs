import axios from "axios";
import FilmModel from "../models/film";

const insertFilms = async (url: string) => {
    
    const response = await axios.get(url);

    const results = response.data.results;

        try {
            results.forEach(async (result:any) => {
                const existingPerson = await FilmModel.findOne({ title: result.title });
        
                if (existingPerson) {
                    await FilmModel.findOneAndUpdate({ title: result.title }, result);
                } else {
                    await FilmModel.create(result);
                }
                
            });
            return { message: "¡Todas las películas fueron insertadas o actualizadas exitosamente!" };
        } catch (error) {
            console.error('Error al crear o actualizar datos:', error);
            return { error: 'Error al crear o actualizar datos de films'};
        }
}

export { insertFilms };