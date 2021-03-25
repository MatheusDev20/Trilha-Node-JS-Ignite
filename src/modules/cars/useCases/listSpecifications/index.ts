import SpecificationRepository from "../../repositories/implementations/SpecificationRepository";
import ListEspecificationUseCase from "./ListEspecificationUseCase";
import ListEspecificationController from "./ListSpecificationsController";

const specificationRepository = SpecificationRepository.getInstance();
const listEspecificationUseCase = new ListEspecificationUseCase(
    specificationRepository
);
const listEspecificationController = new ListEspecificationController(
    listEspecificationUseCase
);

export default listEspecificationController;
