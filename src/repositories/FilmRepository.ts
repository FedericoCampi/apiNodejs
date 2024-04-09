import FilmModel from "../models/film.js";
import { Film } from "../interfaces/film.interface.js";

class FilmRepository {

    async getFilms(releaseDate?: string) {
        if (!releaseDate) {
            return await FilmModel.find({});
        } else {
            return await FilmModel.find({ release_date: { $gt: releaseDate } });
        }
    }

    async insertOrUpdateFilm(filmData: Film) {
        const existingFilm = await FilmModel.findOne({ title: filmData.title });
        if (existingFilm) {
            await FilmModel.findOneAndUpdate({ title: filmData.title }, filmData);
        } else {
            await FilmModel.create(filmData);
        }
    }

    async findFilmByName(name: string) {
        return await FilmModel.findOne({ title: name });
    }
}

export default new FilmRepository();