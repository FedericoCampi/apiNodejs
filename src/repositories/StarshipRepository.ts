import StarshipModel from "../models/starship";
import { Starship } from "../interfaces/starship.interface";

class StarshipRepository {

    async getStarships(passengers?: string) {
        if (!passengers) {
            return await StarshipModel.find({});
        } else {
            return await StarshipModel.find({ passengers: { passengers } });
        }
    }

    async insertOrUpdateStarships(starshipData: Starship) {
        const existingStarship = await StarshipModel.findOne({ name: starshipData.name });
        if (existingStarship) {
            await StarshipModel.findOneAndUpdate({ name: starshipData.name }, starshipData);
        } else {
            await StarshipModel.create(starshipData);
        }
    }

    async findStarshipByName(name: string) {
        return await StarshipModel.findOne({ name: name });
    }
}

export default new StarshipRepository();