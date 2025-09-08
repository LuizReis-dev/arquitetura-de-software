export async function genres(parent: unknown, args: unknown, context: any) {
    return context.genreService.findMany();
}

export async function genre(parent: unknown, args: { id: number }, context: any) {
    return context.genreService.findById(args.id);
}
