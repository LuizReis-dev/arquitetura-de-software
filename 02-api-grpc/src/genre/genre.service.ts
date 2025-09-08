import { GenreDataSource } from "./genre.datasource";

export class GenreService {
    constructor(private genreDataSource: GenreDataSource) {
        this.genreDataSource = genreDataSource;
    }

    listGenres() {
        return this.genreDataSource.findAll();
    }
    
    getGenre(id: number) {
        return this.genreDataSource.findById(id);
    }
    
    createGenre(name: string) {
        const newGenre = {
            id: Date.now(),
            name
        };
        return this.genreDataSource.create(newGenre);
    }
    
    updateGenre(id: number, name: string) {
        const genre = this.genreDataSource.findById(id);
        if (!genre) throw new Error("Genre not found");
        const updated = { id, name };
        return this.genreDataSource.update(updated)!;
    }
    
    deleteGenre(id: number) {
        const success = this.genreDataSource.delete(id);
        if (!success) throw new Error("Genre not found");
    }
}