// Instanciar nessa ordem Repositorio ( Singleton com get instance)
// Instancia o Service que recebe o Repositorio como arg
// Instanciar o Controller que recebe o service como Arg

import SpecificationRepository from "../../repositories/implementations/SpecificationRepository";
import CreateSpecificationService from "./CreateSpecification";
import CreateSpecificationController from "./CreateSpecificationController";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecification = new CreateSpecificationService(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecification
);

export default createSpecificationController;
