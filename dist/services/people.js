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
import PeopleRepository from "../repositories/PeopleRepository.js";
const insertPeople = (url) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios.get(url);
        const results = response.data.results;
        for (const result of results) {
            yield PeopleRepository.insertOrUpdatePeople(result);
        }
        return { message: "¡Todas las personas fueron insertadas o actualizadas exitosamente!" };
    }
    catch (error) {
        console.error('Error al crear o actualizar datos:', error);
        return { error: 'Error al crear o actualizar datos de people' };
    }
});
export { insertPeople };
