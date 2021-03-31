import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";
import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryUseCase from "./ImportUseCase";

const categoryRepository = null;

const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);

const importController = new ImportCategoryController(importCategoryUseCase);

export default importController;
