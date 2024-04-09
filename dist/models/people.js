import { model, Schema } from "mongoose";
const PeopleSchema = new Schema({
    name: {
        type: String,
    },
    height: {
        type: String
    },
    mass: {
        type: String
    },
    hair_color: {
        type: String
    },
    skin_color: {
        type: String
    },
    eye_color: {
        type: String
    },
    birth_year: {
        type: String
    },
    gender: {
        type: String
    },
    homeworld: {
        type: String
    },
    films: [{
            type: String
        }],
    species: [{
            type: String
        }],
    vehicles: [{
            type: String
        }],
    starships: [{
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
    }
}, {
    timestamps: true,
    versionKey: false,
});
const PeopleModel = model("people", PeopleSchema);
export default PeopleModel;
