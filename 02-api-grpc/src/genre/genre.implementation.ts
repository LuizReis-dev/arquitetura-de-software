import { GenreService } from "./genre.service";
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";

type Callback<T> = sendUnaryData<T>;
export class GenreImplementation {
    constructor(private genreService: GenreService) {
        this.genreService = genreService;
    }
    ListGenres = (call: ServerUnaryCall<unknown, any>, callback: Callback<any>) => {
        try {
            const genres = this.genreService.listGenres();
            callback(null, { genres });
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    }

    GetGenre = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            const genre = this.genreService.getGenre(call.request.id);
            callback(null, genre);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    }

    CreateGenre = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {
            const genre = this.genreService.createGenre(call.request.name);
            callback(null, genre);
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    }
    UpdateGenre = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {
            const genre = this.genreService.updateGenre(
                call.request.id,
                call.request.name
            );
            callback(null, genre);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    }

    DeleteGenre = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            this.genreService.deleteGenre(call.request.id);
            callback(null, {});
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    }

    getGenreImplementation() {
        return {
            ListGenres: this.ListGenres,
            GetGenre: this.GetGenre,
            CreateGenre: this.CreateGenre,
            UpdateGenre: this.UpdateGenre,
            DeleteGenre: this.DeleteGenre
        };
    }
}