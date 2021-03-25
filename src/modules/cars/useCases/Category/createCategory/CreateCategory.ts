import ICategoriesRepository from "../../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategory {
    private categoriesRepository: ICategoriesRepository;
    constructor(categoriesRepository: ICategoriesRepository) {
        this.categoriesRepository = categoriesRepository; // Dependecy Inversion principle, injetando o repository no service
    }
    execute({ name, description }: IRequest): void {
        const existedCategory = this.categoriesRepository.findByName(name);

        if (existedCategory) {
            throw new Error("Category Already exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export default CreateCategory;
