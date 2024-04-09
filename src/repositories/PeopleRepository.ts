import PeopleModel from "../models/people.js";
import { People } from "../interfaces/people.interface.js";

class PeopleRepository {

    async getPeople(gender?: string) {
        if (!gender) {
            return await PeopleModel.find({});
        } else {
            return await PeopleModel.find({ gender });
        }
    }

    async insertOrUpdatePeople(peopleData: People) {
        const existingPeople = await PeopleModel.findOne({ name: peopleData.name });
        if (existingPeople) {
            await PeopleModel.findOneAndUpdate({ name: peopleData.name }, peopleData);
        } else {
            await PeopleModel.create(peopleData);
        }
    }

    async findPeopleByName(name: string) {
        return await PeopleModel.findOne({ name: name });
    }
}

export default new PeopleRepository();