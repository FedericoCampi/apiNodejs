import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import FilmModel from "../models/film";


const getFilms = async (req:Request, res: Response) => {

    try {
       
        const realease = req.query.release_date;
        
        if (!realease) {
            const datos = await FilmModel.find({});
            res.send(datos);
            
        }else{
            const datos = await FilmModel.find({ release_date: { $gt: realease } });
            res.send(datos);
        }
        //forzar error
        //throw new Error('Forzando un error');
    } catch (error) {
        handleHttp(res, 'Error get films');
    }
}

export { getFilms };