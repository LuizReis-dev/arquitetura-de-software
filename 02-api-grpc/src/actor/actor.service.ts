import { ActorDataSource } from "./actor.datasource";

export class ActorService {

    constructor(private actorDataSource: ActorDataSource) {
        this.actorDataSource = actorDataSource;
    }

    listActors() {
        return this.actorDataSource.findAll();
    }

    getActor(id: number) {
        const actor = this.actorDataSource.findById(id);
        if (!actor) throw new Error("Actor not found");
        return actor;
    }
    createActor(name: string, birth_date: string) {
        const newActor = {
            id: Date.now(),
            name,
            birth_date
        };
        return this.actorDataSource.create(newActor);
    }

    updateActor(id: number, name: string, birth_date: string) {
        const actor = this.actorDataSource.findById(id);
        if (!actor) throw new Error("Actor not found");
        const updated = { id, name, birth_date };
        return this.actorDataSource.update(updated)!;
    }

    deleteActor(id: number) {
        const success = this.actorDataSource.delete(id);
        if (!success) throw new Error("Actor not found");
    }

}