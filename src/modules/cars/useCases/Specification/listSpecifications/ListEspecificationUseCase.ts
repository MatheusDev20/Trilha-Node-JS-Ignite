import Category from "../../../model/Category";
import ISpecificationRepository from "../../../repositories/ISpecificationRepository";

class ListRepositoryUseCase {
    private specificationRepository: ISpecificationRepository;
    constructor(specificationRepository: ISpecificationRepository) {
        this.specificationRepository = specificationRepository; // Dependecy Inversion principle, injetando o repository no service
    }
    execute(): Category[] {
        const all = this.specificationRepository.list();

        return all;
    }
}

export default ListRepositoryUseCase;
