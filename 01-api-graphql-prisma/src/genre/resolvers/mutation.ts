export async function createGenre(parent: unknown, args: { input: { name: string } }, context: any) {
    return context.genreService.create(args.input);
}
