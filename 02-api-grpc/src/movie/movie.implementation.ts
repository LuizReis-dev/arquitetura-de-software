import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { MovieService } from "./movie.service";

type Callback<T> = sendUnaryData<T>;

export class MovieImplementation {
    constructor(private movieService: MovieService) { }

    ListMovies = (call: ServerUnaryCall<unknown, any>, callback: Callback<any>) => {
        try {
            const movies = this.movieService.listMovies();
            callback(null, { movies });
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    };

    GetMovie = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            const movie = this.movieService.getMovie(call.request.id);
            callback(null, movie);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };

    CreateMovie = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {

            const movie = this.movieService.createMovie(
                call.request.title,
                call.request.release_year,
                Number(call.request.genre_id),
                (call.request.actor_ids || []).map(Number)
            );
            callback(null, movie);
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    };

    UpdateMovie = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {
            const movie = this.movieService.updateMovie(
                call.request.id,
                call.request.title,
                call.request.release_year,
                call.request.genre_id,
                call.request.actor_ids
            );
            callback(null, movie);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };

    DeleteMovie = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            this.movieService.deleteMovie(call.request.id);
            callback(null, {});
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };

    ListMovieActors = (call: ServerUnaryCall<{ movie_id: number }, any>, callback: Callback<any>) => {
        try {
            const actor_ids = this.movieService.listMovieActors(call.request.movie_id);
            callback(null, { actor_ids });
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };

    AddActorToMovie = (call: ServerUnaryCall<{ movie_id: number; actor_id: number }, any>, callback: Callback<any>) => {
        try {
            this.movieService.addActorToMovie(call.request.movie_id, call.request.actor_id);
            callback(null, {});
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };
    getMovieImplementation() {
        return {
            ListMovies: this.ListMovies,
            GetMovie: this.GetMovie,
            CreateMovie: this.CreateMovie,
            UpdateMovie: this.UpdateMovie,
            DeleteMovie: this.DeleteMovie,
            ListMovieActors: this.ListMovieActors,
            AddActorToMovie: this.AddActorToMovie,
        };
    }
}
