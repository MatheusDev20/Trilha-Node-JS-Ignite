import { Request, Response } from "express";

import CreateSpecification from "./CreateSpecification";

class CreateSpecificationController {
    constructor(private createSpecification: CreateSpecification) {} // Injetando o service dentro do controller via
    // Dependency Inversion

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body;
        this.createSpecification.execute({
            name,
            description,
        });

        return res.status(201).send();
    }
}

export default CreateSpecificationController;
