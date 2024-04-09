import { model, Schema } from "mongoose";
import { Film } from "../interfaces/film.interface.js";

const filmSchema = new Schema<Film>(
    {
        title: {
            type: String,
        },
        episode_id: { 
            type: Number,
        },
        opening_crawl: { 
            type: String 
        },
        director: { 
            type: String 
        },
        producer: { 
            type: String 
        },
        release_date: { 
            type: String 
        },
        characters: [{ 
            type: String 
        }],
        planets: [{ 
            type: String 
        }],
        starships: [{ 
            type: String 
        }],
        vehicles: [{ 
            type: String 
        }],
        species: [{ 
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
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const FilmModel = model("film", filmSchema);

export default FilmModel;