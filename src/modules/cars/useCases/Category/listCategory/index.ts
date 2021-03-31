import { categoriesRoutes } from "../../../../../routes/categories.routes";
import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";
import ListCategoryController from "./listCategoryController";
import ListCategoryUseCase from "./ListCategoryUseCase";

const categoriesRepository = null;

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export default listCategoryController;
