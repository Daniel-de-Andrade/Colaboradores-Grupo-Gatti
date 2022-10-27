import Router from "express"
import { CreateDepartamentController } from "./controllers/CreateDepartamentController";
import { CreateContributorController } from "./controllers/CreateContributorController";
import { DeleteDepartamentController } from "./controllers/DeleteDepartamentController";
import { GetAllDepartamentsController } from "./controllers/GetAllDepartamentsController";
import { GetAllContribuotrsController } from "./controllers/GetAllContribuotrsController";
import { UpdateDepartamentController } from "./controllers/UpdateDepartamentController";
import { UpdateContributorController } from "./controllers/UpdateContributorController";
import { DeleteContributorController } from "./controllers/DeleteContributorController";
import { GetOneContributorController } from "./controllers/GetOneContributorController";

const routes = Router();

routes.post("/departaments", new CreateDepartamentController().handle);
routes.get("/departaments", new GetAllDepartamentsController().handle);
routes.put("/departaments/:id", new UpdateDepartamentController().handle);
routes.delete("/departaments/:id", new DeleteDepartamentController().handle);

routes.post("/contributors", new CreateContributorController().handle);
routes.get("/contributors", new GetAllContribuotrsController().handle);
routes.get("/contributors/:id", new GetOneContributorController().handle);
routes.put("/contributors/:id", new UpdateContributorController().handle);
routes.delete("/contributors/:id", new DeleteContributorController().handle);

export {routes}