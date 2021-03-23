import ISpecificationRepository from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateSpecificationService {
    constructor(private specificationRepository: ISpecificationRepository) {}
    execute({ name, description }: IRequest): void {
        const existSpecification = this.specificationRepository.findByName(
            name
        );
        if (existSpecification) {
            throw new Error("Specification Exist");
        }
        this.specificationRepository.create({ name, description });
    }
}

export default CreateSpecificationService;
