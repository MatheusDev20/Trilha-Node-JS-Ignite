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

    async execute({ name, description }: IRequest): Promise<void> {
        const existedCategory = await this.categoriesRepository.findByName(
            name
        );

        if (existedCategory) {
            throw new Error("Category Already exists");
        }

        this.categoriesRepository.create({ name, description });
    }
}

export default CreateCategory;
