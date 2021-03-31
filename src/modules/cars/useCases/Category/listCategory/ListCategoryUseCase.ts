import Category from "../../../entities/Category";
import ICategoriesRepository from "../../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository; // Dependecy Inversion principle, injetando o repository no service
    }
    execute(): Promise<Category[]> {
        const categories = this.categoriesRepository.list();

        return categories;
    }
}

export default ListCategoryUseCase;
