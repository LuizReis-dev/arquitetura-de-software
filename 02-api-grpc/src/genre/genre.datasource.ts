import { Genre } from "./genre";

export class GenreDataSource {
    private genres: Genre[] = [];

    findAll(): Genre[] {
        return this.genres;
    }
    findById(id: number): Genre | undefined {
        return this.genres.find(g => g.id == id);
    }

    create(genre: Genre): Genre {
        this.genres.push(genre);
        return genre;
    }
    update(updated: Genre): Genre | null {
        const index = this.genres.findIndex(g => g.id == updated.id);
        if (index === -1) return null;
        this.genres[index] = updated;
        return updated;
    }

    delete(id: number): boolean {
        const before = this.genres.length;
        this.genres = this.genres.filter(g => g.id != id);
        return this.genres.length < before;
    }
}