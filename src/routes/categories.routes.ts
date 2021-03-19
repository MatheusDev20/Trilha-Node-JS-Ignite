import { Router } from "express";

import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    const { name, description } = req.body;

    const existedCategory = categoriesRepository.findByNamee(name);

    if (existedCategory) {
        return res.status(400).json({ err: "Categoria já existente" });
    }

    categoriesRepository.create({ name, description });
    return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
    const categories = categoriesRepository.list();

    return res.status(200).json(categories);
});
export { categoriesRoutes };
