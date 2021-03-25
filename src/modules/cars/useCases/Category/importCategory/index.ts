import ImportCategoryController from "./ImportCategoryController";
import ImportCategoryUseCase from "./ImportUseCase";

const importCategoryUseCase = new ImportCategoryUseCase();
const importController = new ImportCategoryController(importCategoryUseCase);

export default importController;
