import Category from "../../model/Category";
import ICategoriesRepository from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository; // Dependecy Inversion principle, injetando o repository no service
    }
    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export default ListCategoryUseCase;
