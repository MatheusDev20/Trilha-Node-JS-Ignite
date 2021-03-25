import { Router } from "express";

import createSpecificationController from "../modules/cars/useCases/createSpecification/index";
import listEspecificationController from "../modules/cars/useCases/listSpecifications/index";

const specificationRoutes = Router();
specificationRoutes.post("/", (req, res) => {
    createSpecificationController.handle(req, res);
});

specificationRoutes.get("/", (req, res) => {
    listEspecificationController.handle(req, res);
});
export { specificationRoutes };
