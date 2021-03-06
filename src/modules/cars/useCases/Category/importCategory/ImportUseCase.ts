import csvParse from "csv-parse";
import fs from "fs";

import CategoriesRepository from "../../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}
class ImportCategoryUseCase {
    constructor(private categoryRepository: CategoriesRepository) {}
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const categories: IImportCategory[] = [];
            const stream = fs.createReadStream(file.path);
            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (l) => {
                    console.log(l);
                    const [name, description] = l;
                    console.log(name, description);
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async (categorie) => {
            const { name, description } = categorie;
            const existedCategorie = this.categoryRepository.findByName(name);

            if (!existedCategorie) {
                this.categoryRepository.create({
                    name,
                    description,
                });
            }
        });
    }
}

export default ImportCategoryUseCase;
