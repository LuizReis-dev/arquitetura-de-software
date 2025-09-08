import { Actor } from "./actor";

export class ActorDataSource {
    private actors: Actor[] = [];

    findAll(): Actor[] {
        return this.actors;
    }

    findById(id: number): Actor | undefined {
        return this.actors.find(a => a.id == id);
    }

    create(actor: Actor): Actor {
        this.actors.push(actor);
        return actor;
    }
    
    update(updated: Actor): Actor | null {
        const index = this.actors.findIndex(a => a.id == updated.id);
        if (index === -1) return null;
        this.actors[index] = updated;
        return updated;
    }

    delete(id: number): boolean {
        const before = this.actors.length;
        this.actors = this.actors.filter(a => a.id != id);
        return this.actors.length < before;
    }
}
