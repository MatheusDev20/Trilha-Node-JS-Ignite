import { getRepository, Repository } from "typeorm";

import Category from "../../entities/Category";
import ICategoriesRepository from "../ICategoriesRepository";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}
class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }
    // public static getInstance(): CategoriesRepository {
    //    if (!CategoriesRepository.INSTANCE) {
    //      CategoriesRepository.INSTANCE = new CategoriesRepository();
    //  }
    //
    //  return CategoriesRepository.INSTANCE;
    // }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find();
        return categories;
    }
    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = await this.repository.create({
            description,
            name,
        });
        await this.repository.save(category);
    }
    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export default CategoriesRepository;
