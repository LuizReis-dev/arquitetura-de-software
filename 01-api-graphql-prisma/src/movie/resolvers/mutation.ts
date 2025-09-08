import { CreateMovieDTO } from "../dtos/CreateMovieDTO";

export async function createMovie(parent: unknown, args: { input: CreateMovieDTO }, context: any) {
    return context.movieService.create(args.input);
}

export async function updateMovie(parent: unknown, args: { id: number; input: CreateMovieDTO }, context: any) {
    return context.movieService.update(args.id, args.input);
}

export async function deleteMovie(parent: unknown, args: { id: number }, context: any) {
    return context.movieService.delete(args.id);
}

export async function addActorsToMovie(parent: unknown, args: { movieId: number; actorIds: number[] }, context: any) {
    return context.movieService.addActors(args.movieId, args.actorIds);
}

export async function removeActorFromMovie(parent: unknown, args: { movieId: number; actorId: number }, context: any) {
    return context.movieService.removeActor(args.movieId, args.actorId);
}

export async function addGenresToMovie(parent: unknown, args: { movieId: number; genreIds: number[] }, context: any) {
    return context.movieService.addGenres(args.movieId, args.genreIds);
}
