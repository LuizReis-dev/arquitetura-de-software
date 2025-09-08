import { MovieDataSource } from "./datasource";
import { CreateMovieDTO } from "./dtos/CreateMovieDTO";

export class MovieService {
    constructor(private datasource: MovieDataSource) {
        this.datasource = datasource;
    }

    async findMany() {
        return this.datasource.findMany();
    }

    async findById(id: number) {
        return this.datasource.findById(id);
    }
    async create(data: CreateMovieDTO) {
        return this.datasource.create(data);
    }

    async update(id: number, data: CreateMovieDTO) {
        return this.datasource.update(id, data);
    }

    async delete(id: number) {
        return this.datasource.delete(id);
    }

    async addActors(movieId: number, actorIds: number[]) {
        return this.datasource.addActors(movieId, actorIds);
    }

    async removeActor(movieId: number, actorId: number) {
        return this.datasource.removeActor(movieId, actorId);
    }

    async addGenres(movieId: number, genreIds: number[]) {
        return this.datasource.addGenres(movieId, genreIds);
    }
}