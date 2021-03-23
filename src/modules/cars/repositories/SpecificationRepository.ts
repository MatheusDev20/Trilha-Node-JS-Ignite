import Specification from "../model/Specification";
import ISpecificationRepository from "./ISpecificationRepository";

interface ICreateSpecificationDTO {
    name: string;
    description: string;
}
class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];

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
