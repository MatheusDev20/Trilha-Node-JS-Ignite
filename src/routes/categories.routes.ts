import { Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategory";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;
    const categoryService = new CreateCategoryService(categoriesRepository);
    categoryService.execute({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
});
export { categoriesRoutes };
