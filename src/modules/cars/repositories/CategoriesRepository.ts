import Category from "../model/Category";
import ICategoriesRepository from "./ICategoriesRepository";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}
class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    list(): Category[] {
        console.log(this.categories);
        return this.categories;
    }
    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
        console.log(this.categories);
    }
    findByName(name: string): Category {
        const category = this.categories.find(
            (category) => category.name === name
        );
        return category;
    }
}

export default CategoriesRepository;
