var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { handleHttp } from "../utils/error.handler.js";
import FilmRepository from "../repositories/FilmRepository.js";
const getFilms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const release = req.query.release;
        const datos = yield FilmRepository.getFilms(release);
        res.send(datos);
    }
    catch (error) {
        handleHttp(res, 'Error get films');
    }
});
const getFilmByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const film = yield FilmRepository.findFilmByName(name);
        if (!film) {
            return res.status(404).send('Película no encontrada');
        }
        res.send(film);
    }
    catch (error) {
        handleHttp(res, 'Error en obtener película por nombre');
    }
});
export { getFilms, getFilmByName };
