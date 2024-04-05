import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import FilmModel from "../models/film";

const getFilms = async (req:Request, res: Response) => {

    try {
       
        const release = req.query.release;
        
        if (!release) {
            const datos = await FilmModel.find({});
            res.send(datos);
            
        }else{
            const datos = await FilmModel.find({ release_date: { $gt: release } });
            res.send(datos);
        }
        //forzar error
        //throw new Error('Forzando un error');
    } catch (error) {
        handleHttp(res, 'Error get films');
    }
}

export { getFilms };