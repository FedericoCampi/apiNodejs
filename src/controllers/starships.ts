import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import StarshipModel from "../models/starship";


const getStarships = async (req:Request, res: Response) => {

    try {

        const passengers = req.query.passengers;
        
        if (!passengers) {
            const datos = await StarshipModel.find({});
            res.send(datos);
            
        }else{
            const datos = await StarshipModel.find({passengers: passengers});
            res.send(datos);
        }

        //forzar error para test
        //throw new Error('Forzando un error');
    } catch (error) {
        handleHttp(res, 'Error get starships');
        res.send('Error get starships');
    }
}

export { getStarships };