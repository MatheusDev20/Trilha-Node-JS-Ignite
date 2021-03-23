import CategoriesRepository from "../../repositories/CategoriesRepository";
import CreateCategory from "./CreateCategory";
import CreateCategoryController from "./CreateCategoryController";

const categoriesRepository = new CategoriesRepository();
const createCategory = new CreateCategory(categoriesRepository);

const createCategoryController = new CreateCategoryController(createCategory);

export default createCategoryController;
