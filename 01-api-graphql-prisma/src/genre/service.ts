import { GenreDataSource } from './datasource';

export class GenreService {
    constructor(private datasource: GenreDataSource) {}

    findMany() {
        return this.datasource.findMany();
    }

    findById(id: number) {
        return this.datasource.findById(id);
    }

    create(input: { name: string }) {
        return this.datasource.create(input);
    }
}
