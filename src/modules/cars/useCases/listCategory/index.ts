import { categoriesRoutes } from "../../../../routes/categories.routes";
import CategoriesRepository from "../../repositories/CategoriesRepository";
import ListCategoryController from "./listCategoryController";
import ListCategoryUseCase from "./ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();

const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

const listCategoryController = new ListCategoryController(listCategoryUseCase);

export default listCategoryController;
