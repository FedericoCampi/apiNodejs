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
import PeopleRepository from "../repositories/PeopleRepository.js";
const getPeople = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const gender = req.query.gender;
        const datos = yield PeopleRepository.getPeople(gender);
        res.send(datos);
    }
    catch (error) {
        handleHttp(res, 'Error get people');
    }
});
const getPeopleByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const name = req.params.name;
        const people = yield PeopleRepository.findPeopleByName(name);
        if (!people) {
            return res.status(404).send('Personaje no encontrado');
        }
        res.send(people);
    }
    catch (error) {
        handleHttp(res, 'Error en obtener personaje por nombre');
    }
});
export { getPeople, getPeopleByName };
