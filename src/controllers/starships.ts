import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler.js";
import StarshipRepository from "../repositories/StarshipRepository.js";

const getStarships = async (req: Request, res: Response) => {
    try {
        const passengers = req.query.passengers as string;
        const datos = await StarshipRepository.getStarships(passengers);
        res.send(datos);
    } catch (error) {
        handleHttp(res, 'Error get starships');
    }
};

const getStarshipByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const starship = await StarshipRepository.findStarshipByName(name);
        
        if (!starship) {
            return res.status(404).send('Nave no encontrada');
        }

        res.send(starship);
    } catch (error) {
        handleHttp(res, 'Error en obtener nave por nombre');
    }
};

export { getStarships, getStarshipByName };