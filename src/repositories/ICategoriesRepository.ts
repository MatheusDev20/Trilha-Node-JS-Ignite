import Category from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}
// Classe para ser implementada pelas subclasses, onde não importa como vai ser feita a implementação dos metodos.
// TypeORM, Sequelize etc...
interface ICategoriesRepository { 
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export default ICategoriesRepository;
