import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";
import CreateCategory from "./CreateCategory";
import CreateCategoryController from "./CreateCategoryController";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();

    const createCategory = new CreateCategory(categoriesRepository);

    const createCategoryController = new CreateCategoryController(
        createCategory
    );

    return createCategoryController;
};
