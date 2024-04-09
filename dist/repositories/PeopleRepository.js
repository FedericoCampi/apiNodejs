var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import PeopleModel from "../models/people.js";
class PeopleRepository {
    getPeople(gender) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!gender) {
                return yield PeopleModel.find({});
            }
            else {
                return yield PeopleModel.find({ gender });
            }
        });
    }
    insertOrUpdatePeople(peopleData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingPeople = yield PeopleModel.findOne({ name: peopleData.name });
            if (existingPeople) {
                yield PeopleModel.findOneAndUpdate({ name: peopleData.name }, peopleData);
            }
            else {
                yield PeopleModel.create(peopleData);
            }
        });
    }
    findPeopleByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PeopleModel.findOne({ name: name });
        });
    }
}
export default new PeopleRepository();
