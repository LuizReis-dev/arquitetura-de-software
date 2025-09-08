export interface Movie {
    id: number;
    title: string;
    release_year: number;
    genre_id: number;
    actor_ids: number[];
}