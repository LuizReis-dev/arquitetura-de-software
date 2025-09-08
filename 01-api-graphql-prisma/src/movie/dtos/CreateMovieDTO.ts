export class CreateMovieDTO {
    title: string;
    year: number;
    actorIds: number[];
    genreIds: number[];
    constructor(title: string, year: number, actorIds: number[], genreIds: number[]) {
        this.title = title;
        this.year = year;
        this.actorIds = actorIds;
        this.genreIds = genreIds;
    }
}