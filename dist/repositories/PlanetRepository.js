var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PlanetModel from "../models/planet.js";
class PlanetRepository {
    getPlanets(climate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!climate) {
                return yield PlanetModel.find({});
            }
            else {
                return yield PlanetModel.find({ climate });
            }
        });
    }
    insertOrUpdatePlanet(planetData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPlanet = yield PlanetModel.findOne({ name: planetData.name });
            if (existingPlanet) {
                yield PlanetModel.findOneAndUpdate({ name: planetData.name }, planetData);
            }
            else {
                yield PlanetModel.create(planetData);
            }
        });
    }
    findPlanetByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PlanetModel.findOne({ name: name });
        });
    }
}
export default new PlanetRepository();
