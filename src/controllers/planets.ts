import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import PlanetModel from "../models/planet";


const getPlanets = async (req:Request, res: Response) => {

    try {

        const climate = req.query.climate;
        
        if (!climate) {
            const datos = await PlanetModel.find({});
            res.send(datos);
            
        }else{
            const datos = await PlanetModel.find({ climate: climate });
            res.send(datos);
        }
        //forzar error para test
        //throw new Error('Forzando un error');
    } catch (error) {
        handleHttp(res, 'Error get planets');
    }
}

export { getPlanets };