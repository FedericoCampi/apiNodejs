import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler.js";
import FilmRepository from "../repositories/FilmRepository.js";

const getFilms = async (req: Request, res: Response) => {
    try {
        const release = req.query.release as string;
        const datos = await FilmRepository.getFilms(release);
        res.send(datos);
    } catch (error) {
        handleHttp(res, 'Error get films');
    }
}

const getFilmByName = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        const film = await FilmRepository.findFilmByName(name);
        
        if (!film) {
            return res.status(404).send('Película no encontrada');
        }

        res.send(film);
    } catch (error) {
        handleHttp(res, 'Error en obtener película por nombre');
    }
};

export { getFilms, getFilmByName };