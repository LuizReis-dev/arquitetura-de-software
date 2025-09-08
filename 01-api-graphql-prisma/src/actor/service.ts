import { ActorDataSource } from './datasource';

export class ActorService {
    constructor(private datasource: ActorDataSource) {}

    findMany() {
        return this.datasource.findMany();
    }

    findById(id: number) {
        return this.datasource.findById(id);
    }

    create(input: { name: string; birthdate: string }) {
        return this.datasource.create(input);
    }

    update(id: number, input: { name: string; birthdate: string }) {
        return this.datasource.update(id, input);
    }

    async delete(id: number) {
        await this.datasource.delete(id);
        return true;
    }
}
