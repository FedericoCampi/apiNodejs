var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FilmModel from "../models/film.js";
class FilmRepository {
    getFilms(releaseDate) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!releaseDate) {
                return yield FilmModel.find({});
            }
            else {
                return yield FilmModel.find({ release_date: { $gt: releaseDate } });
            }
        });
    }
    insertOrUpdateFilm(filmData) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingFilm = yield FilmModel.findOne({ title: filmData.title });
            if (existingFilm) {
                yield FilmModel.findOneAndUpdate({ title: filmData.title }, filmData);
            }
            else {
                yield FilmModel.create(filmData);
            }
        });
    }
    findFilmByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield FilmModel.findOne({ title: name });
        });
    }
}
export default new FilmRepository();
