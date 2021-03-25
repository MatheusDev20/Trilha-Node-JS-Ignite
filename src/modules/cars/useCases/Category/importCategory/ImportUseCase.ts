import parse from "csv-parse";
import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse();

        stream.pipe(parseFile);
        parseFile.on("data", async (l) => {
            console.log(l);
        });
    }
}

export default ImportCategoryUseCase;
