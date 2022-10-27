import { getRepository } from "typeorm";
import { Contributor } from "../entities/Contributor";

export class DeleteContributorService {
    async execute(id: string) {
        const repo = getRepository(Contributor);

        if (!await repo.findOne(id)) {
            return new Error("Contributor does not exists");
        }

        await repo.delete(id);
    }
}