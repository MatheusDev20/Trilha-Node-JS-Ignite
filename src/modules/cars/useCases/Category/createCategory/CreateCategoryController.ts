import { Request, Response } from "express";

import CreateCategory from "./CreateCategory";

class CreateCategoryController {
    constructor(private createCategory: CreateCategory) {} // Injetando o service dentro do controller via

    // Dependency Inversion

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body;

        this.createCategory.execute({
            name,

            description,
        });

        return res.status(201).send();
    }
}

export default CreateCategoryController;
