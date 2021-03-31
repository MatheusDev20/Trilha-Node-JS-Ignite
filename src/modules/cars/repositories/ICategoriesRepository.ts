import Category from "../entities/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}
// Classe para ser implementada pelas subclasses, onde não importa como vai ser feita a implementação dos metodos.
// TypeORM, Sequelize etc...
interface ICategoriesRepository {
    findByName(name: string): Promise<Category>;
    list(): Promise<Category[]>;
    create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export default ICategoriesRepository;
