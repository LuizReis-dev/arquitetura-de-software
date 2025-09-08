import { PrismaClient } from '../../generated/prisma';

export class ActorDataSource {
    constructor(private prisma: PrismaClient) {}

    findMany() {
        return this.prisma.actor.findMany({ include: { movies: true } });
    }

    findById(id: number) {
        return this.prisma.actor.findUnique({ where: { id }, include: { movies: true } });
    }

    create(input: { name: string; birthdate: string }) {
        return this.prisma.actor.create({ data: input });
    }

    update(id: number, input: { name: string; birthdate: string }) {
        return this.prisma.actor.update({ where: { id }, data: input });
    }

    delete(id: number) {
        return this.prisma.actor.delete({ where: { id } });
    }
}
