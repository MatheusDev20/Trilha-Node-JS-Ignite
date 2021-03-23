import { Router } from "express";

import CategoriesRepository from "../modules/cars/repositories/CategoriesRepository";
import createCategoryController from "../modules/cars/useCases/createCategory/index";
import listCategoryController from "../modules/cars/useCases/listCategory/index";

const categoriesRepository = new CategoriesRepository();
const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    listCategoryController.handle(req, res);
});
export { categoriesRoutes };
