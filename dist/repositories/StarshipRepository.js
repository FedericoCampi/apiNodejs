var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import StarshipModel from "../models/starship.js";
class StarshipRepository {
    getStarships(passengers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!passengers) {
                return yield StarshipModel.find({});
            }
            else {
                return yield StarshipModel.find({ passengers });
            }
        });
    }
    insertOrUpdateStarships(starshipData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingStarship = yield StarshipModel.findOne({ name: starshipData.name });
            if (existingStarship) {
                yield StarshipModel.findOneAndUpdate({ name: starshipData.name }, starshipData);
            }
            else {
                yield StarshipModel.create(starshipData);
            }
        });
    }
    findStarshipByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield StarshipModel.findOne({ name: name });
        });
    }
}
export default new StarshipRepository();
