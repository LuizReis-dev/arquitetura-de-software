export async function actors(parent: unknown, args: unknown, context: any) {
    return context.actorService.findMany();
}

export async function actor(parent: unknown, args: { id: number }, context: any) {
    return context.actorService.findById(args.id);
}
