import { getRepository } from "typeorm";
import { Departament } from "../entities/Departament";

export class DeleteDepartamentService {
    async execute(id: string) {
        const repo = getRepository(Departament);

        if (!await repo.findOne(id)) {
            return new Error("Departament does not exists");
        }

        await repo.delete(id);
    }
}