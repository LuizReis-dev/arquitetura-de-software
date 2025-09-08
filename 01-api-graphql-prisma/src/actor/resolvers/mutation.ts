export async function createActor(parent: unknown, args: { input: { name: string; birthdate: string } }, context: any) {
    return context.actorService.create(args.input);
}

export async function updateActor(parent: unknown, args: { id: number; input: { name: string; birthdate: string } }, context: any) {
    return context.actorService.update(args.id, args.input);
}

export async function deleteActor(parent: unknown, args: { id: number }, context: any) {
    return context.actorService.delete(args.id);
}
