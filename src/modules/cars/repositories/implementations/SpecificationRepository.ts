import Specification from "../../model/Specification";
import ISpecificationRepository from "../ISpecificationRepository";
import CategoriesRepository from "./CategoriesRepository";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    private static INSTANCE: SpecificationRepository;
    public static getInstance(): SpecificationRepository {
        if (!SpecificationRepository.INSTANCE) {
            SpecificationRepository.INSTANCE = new SpecificationRepository();
        }

        return SpecificationRepository.INSTANCE;
    }
    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specifications = new Specification();

        Object.assign(specifications, {
            name,
            description,
            created_at: new Date(),
        });
        this.specifications.push(specifications);
    }
    findByName(name: string): Specification {
        const existedSpecification = this.specifications.find(
            (specification) => specification.name === name
        );

        return existedSpecification;
    }
    list(): Specification[] {
        return this.specifications;
    }
}

export default SpecificationRepository;
