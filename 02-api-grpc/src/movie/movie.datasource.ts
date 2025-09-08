import { Movie } from "./movie";

export class MovieDataSource {
    private movies: Movie[] = [];

    findAll(): Movie[] {
        return this.movies;
    }

    findById(id: number): Movie | undefined {
        return this.movies.find(m => m.id == id);
    }

    create(movie: Movie): Movie {
        this.movies.push(movie);
        return movie;
    }

    update(updated: Movie): Movie | null {
        const index = this.movies.findIndex(m => m.id == updated.id);
        if (index === -1) return null;
        this.movies[index] = updated;
        return updated;
    }

    delete(id: number): boolean {
        const before = this.movies.length;
        this.movies = this.movies.filter(m => m.id != id);
        return this.movies.length < before;
    }
}