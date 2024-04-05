import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import PeopleRepository from "../repositories/PeopleRepository";

const getPeople = async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as string;
        const datos = await PeopleRepository.getPeople(gender);
        res.send(datos);
    } catch (error) {
        handleHttp(res, 'Error get people');
    }
}

const getPeopleByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const people = await PeopleRepository.findPeopleByName(name);
        
        if (!people) {
            return res.status(404).send('Personaje no encontrado');
        }

        res.send(people);
    } catch (error) {
        handleHttp(res, 'Error en obtener personaje por nombre');
    }
};

export { getPeople, getPeopleByName };