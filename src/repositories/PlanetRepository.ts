import PlanetModel from "../models/planet.js";
import { Planet } from "../interfaces/planet.interface.js";

class PlanetRepository {

    async getPlanets(climate?: string) {
        if (!climate) {
            return await PlanetModel.find({});
        } else {
            return await PlanetModel.find({ climate });
        }
    }

    async insertOrUpdatePlanet(planetData: Planet) {
        const existingPlanet = await PlanetModel.findOne({ name: planetData.name });
        if (existingPlanet) {
            await PlanetModel.findOneAndUpdate({ name: planetData.name }, planetData);
        } else {
            await PlanetModel.create(planetData);
        }
    }

    async findPlanetByName(name: string) {
        return await PlanetModel.findOne({ name: name });
    }
}

export default new PlanetRepository();