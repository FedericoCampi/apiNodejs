import { model, Schema } from "mongoose";
const PlanetsSchema = new Schema({
    name: {
        type: String,
    },
    rotation_period: {
        type: String
    },
    orbital_period: {
        type: String
    },
    diameter: {
        type: String
    },
    climate: {
        type: String
    },
    gravity: {
        type: String
    },
    terrain: {
        type: String
    },
    surface_water: {
        type: String
    },
    population: {
        type: String
    },
    residents: [{
            type: String
        }],
    films: [{
            type: String
        }],
    created: {
        type: String
    },
    edited: {
        type: String
    },
    url: {
        type: String
    },
}, {
    timestamps: true,
    versionKey: false,
});
const PlanetModel = model("planets", PlanetsSchema);
export default PlanetModel;
