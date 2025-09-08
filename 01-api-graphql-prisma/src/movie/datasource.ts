
import { PrismaClient } from "@prisma/client";
import { CreateMovieDTO } from "./dtos/CreateMovieDTO";

export class MovieDataSource {
    constructor(private prisma: PrismaClient) {
        this.prisma = prisma;
    }

    async findMany() {
        return this.prisma.movie.findMany({
            include: {
                actors: true,
                genres: true,
            }
        });
    }
    async findById(id: number) {
        return this.prisma.movie.findUnique({
            where: { id },
            include: {
                actors: true,
                genres: true,
            }
        });
    }

    async create(data: CreateMovieDTO) {
        return this.prisma.movie.create({
            data: {
                title: data.title,
                year: data.year,
                actors: {
                    connect: data.actorIds.map(id => ({ id }))
                },
                genres: {
                    connect: data.genreIds.map(id => ({ id }))
                }
            },
            include: {
                actors: true,
                genres: true,
            }
        });
    }

    async update(id: number, data: CreateMovieDTO) {
        return this.prisma.movie.update({
            where: { id },
            data: {
                title: data.title,
                year: data.year,
                actors: { set: data.actorIds.map(id => ({ id })) },
                genres: { set: data.genreIds.map(id => ({ id })) },
            },
            include: { actors: true, genres: true },
        });
    }

    async delete(id: number) {
        await this.prisma.movie.delete({ where: { id } });
        return true;
    }

    async addActors(movieId: number, actorIds: number[]) {
        return this.prisma.movie.update({
            where: { id: movieId },
            data: {
                actors: { connect: actorIds.map(id => ({ id })) },
            },
            include: { actors: true, genres: true },
        });
    }

    async removeActor(movieId: number, actorId: number) {
        return this.prisma.movie.update({
            where: { id: movieId },
            data: {
                actors: { disconnect: { id: actorId } },
            },
            include: { actors: true, genres: true },
        });
    }

    async addGenres(movieId: number, genreIds: number[]) {
        return this.prisma.movie.update({
            where: { id: movieId },
            data: {
                genres: { connect: genreIds.map(id => ({ id })) },
            },
            include: { actors: true, genres: true },
        });
    }
}