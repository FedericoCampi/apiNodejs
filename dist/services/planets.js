var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import PlanetRepository from "../repositories/PlanetRepository.js";
const insertPlanets = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(url);
        const results = response.data.results;
        for (const result of results) {
            yield PlanetRepository.insertOrUpdatePlanet(result);
        }
        return { message: "¡Todas los planetas fueron insertados o actualizados exitosamente!" };
    }
    catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de planets' };
    }
});
export { insertPlanets };
