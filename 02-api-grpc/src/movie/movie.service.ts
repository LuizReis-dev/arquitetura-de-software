import { Movie } from "./movie";
import { MovieDataSource } from "./movie.datasource";

export class MovieService {
    constructor(private dataSource: MovieDataSource) { }

    listMovies(): Movie[] {
        return this.dataSource.findAll();
    }

    getMovie(id: number): Movie {
        const movie = this.dataSource.findById(id);
        if (!movie) throw new Error("Movie not found");
        return movie;
    }

    createMovie(title: string, release_year: number, genre_id: number, actor_ids: number[]): Movie {
        const newMovie: Movie = {
            id: Date.now(),
            title,
            release_year,
            genre_id,
            actor_ids
        };
        return this.dataSource.create(newMovie);
    }

    updateMovie(id: number, title: string, release_year: number, genre_id: number, actor_ids: number[]): Movie {
        const movie = this.dataSource.findById(id);
        if (!movie) throw new Error("Movie not found");
        const updated: Movie = { id, title, release_year, genre_id, actor_ids };
        return this.dataSource.update(updated)!;
    }

    deleteMovie(id: number): void {
        const success = this.dataSource.delete(id);
        if (!success) throw new Error("Movie not found");
    }

    listMovieActors(movie_id: number): number[] {
        const movie = this.dataSource.findById(movie_id);
        if (!movie) throw new Error("Movie not found");
        return movie.actor_ids;
    }

    addActorToMovie(movie_id: number, actor_id: number): void {
        const movie = this.dataSource.findById(movie_id);
        if (!movie) throw new Error("Movie not found");
        if (!movie.actor_ids.includes(actor_id)) {
            movie.actor_ids.push(actor_id);
            this.dataSource.update(movie);
        }
    }
}