import { PrismaClient } from '../../generated/prisma';

export class GenreDataSource {
    constructor(private prisma: PrismaClient) {}

    findMany() {
        return this.prisma.genre.findMany({ include: { movies: true } });
    }

    findById(id: number) {
        return this.prisma.genre.findUnique({ where: { id }, include: { movies: true } });
    }

    create(input: { name: string }) {
        return this.prisma.genre.create({ data: input });
    }
}
