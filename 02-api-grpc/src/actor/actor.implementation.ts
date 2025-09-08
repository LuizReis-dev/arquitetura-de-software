import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { ActorService } from "./actor.service";
type Callback<T> = sendUnaryData<T>;

export class ActorImplementation {
    constructor(private actorService: ActorService) {
        this.actorService = actorService;
    }

    ListActors = (call: ServerUnaryCall<unknown, any>, callback: Callback<any>) => {
        try {
            const actors = this.actorService.listActors();
            callback(null, { actors });
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    };

    GetActor = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            const actor = this.actorService.getActor(call.request.id);
            callback(null, actor);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    };

    CreateActor = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {
            console.log(call.request);
            const actor = this.actorService.createActor(
                call.request.name,
                call.request.birth_date
            );
            callback(null, actor);
        } catch (err) {
            callback({ code: 13, message: (err as Error).message } as any);
        }
    }

    UpdateActor = (call: ServerUnaryCall<any, any>, callback: Callback<any>) => {
        try {
            const actor = this.actorService.updateActor(
                call.request.id,
                call.request.name,
                call.request.birth_date
            );
            callback(null, actor);
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    }

    DeleteActor = (call: ServerUnaryCall<{ id: number }, any>, callback: Callback<any>) => {
        try {
            this.actorService.deleteActor(call.request.id);
            callback(null, {});
        } catch (err) {
            callback({ code: 5, message: (err as Error).message } as any);
        }
    }
    getActorImplementation() {
        return {
            ListActors: this.ListActors,
            GetActor: this.GetActor,
            CreateActor: this.CreateActor,
            UpdateActor: this.UpdateActor,
            DeleteActor: this.DeleteActor
        };
    }
}