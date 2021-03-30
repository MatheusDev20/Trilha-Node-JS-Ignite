import { Router } from "express";
import multer from "multer";

import createCategoryController from "../modules/cars/useCases/Category/createCategory/index";
import importController from "../modules/cars/useCases/Category/importCategory/index";
import listCategoryController from "../modules/cars/useCases/Category/listCategory/index";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
    listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {
    importController.handle(req, res);
});

export { categoriesRoutes };
