import { Router } from "express";

import SpecificationRepository from "../modules/cars/repositories/SpecificationRepository";
import CreateSspecificationService from "../modules/cars/useCases/createSpecification/CreateSpecification";

const specificationRoutes = Router();
const specifictionRepository = new SpecificationRepository();
specificationRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const specificationService = new CreateSspecificationService(
        specifictionRepository
    );
    specificationService.execute({ name, description });
    return res.status(201).send();
});

specificationRoutes.get("/", (req, res) => {
    const categories = specifictionRepository.list();

    return res.status(200).json(categories);
});
export { specificationRoutes };
