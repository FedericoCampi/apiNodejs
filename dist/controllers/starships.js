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
import StarshipRepository from "../repositories/StarshipRepository.js";
const getStarships = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const passengers = req.query.passengers;
        const datos = yield StarshipRepository.getStarships(passengers);
        res.send(datos);
    }
    catch (error) {
        handleHttp(res, 'Error get starships');
    }
});
const getStarshipByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const starship = yield StarshipRepository.findStarshipByName(name);
        if (!starship) {
            return res.status(404).send('Nave no encontrada');
        }
        res.send(starship);
    }
    catch (error) {
        handleHttp(res, 'Error en obtener nave por nombre');
    }
});
export { getStarships, getStarshipByName };
