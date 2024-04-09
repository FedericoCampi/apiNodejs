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
import PlanetRepository from "../repositories/PlanetRepository.js";
const getPlanets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const climate = req.query.climate;
        const datos = yield PlanetRepository.getPlanets(climate);
        res.send(datos);
    }
    catch (error) {
        handleHttp(res, 'Error get planets');
    }
});
const getPlanetByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const planet = yield PlanetRepository.findPlanetByName(name);
        if (!planet) {
            return res.status(404).send('Planeta no encontrado');
        }
        res.send(planet);
    }
    catch (error) {
        handleHttp(res, 'Error en obtener planeta por nombre');
    }
});
export { getPlanets, getPlanetByName };
