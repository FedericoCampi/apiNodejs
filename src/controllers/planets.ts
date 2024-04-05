import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import PlanetRepository from "../repositories/PlanetRepository";

const getPlanets = async (req: Request, res: Response) => {
    try {
        const climate = req.query.climate as string;
        const datos = await PlanetRepository.getPlanets(climate);
        res.send(datos);
    } catch (error) {
        handleHttp(res, 'Error get planets');
    }
};

const getPlanetByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const planet = await PlanetRepository.findPlanetByName(name);
        
        if (!planet) {
            return res.status(404).send('Planeta no encontrado');
        }

        res.send(planet);
    } catch (error) {
        handleHttp(res, 'Error en obtener planeta por nombre');
    }
};

export { getPlanets, getPlanetByName };