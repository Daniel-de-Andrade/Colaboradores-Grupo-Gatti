import { getRepository } from "typeorm";
import { Departament } from "../entities/Departament";

type DepartamentUpdateRequest = {
    id: string;
    name: string;
    description: string;
}

export class UpdateDepartamentService {
    async execute({id, name, description}:DepartamentUpdateRequest) {
        const repo = getRepository(Departament);

        const departament = await repo.findOne(id);

        if (!departament) {
            return new Error("Departament does not exists");
        }

        departament.name = name ? name : departament.name;
        departament.description = description ? description : departament.description;

       await repo.save(departament);

       return departament;

    }
}