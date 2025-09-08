import { Context } from "../../context";

export async function movies(parent: unknown, args: unknown, context: Context) {
    return context.movieService.findMany();
}

export async function movie(parent: unknown, args: { id: number }, context: Context) {
    return context.movieService.findById(args.id);
}