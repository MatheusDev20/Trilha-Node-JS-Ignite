import { Response, Request } from "express";

import ListEspecificationUseCase from "./ListEspecificationUseCase";

class ListEspecificationController {
    constructor(private listEspecificationUseCase: ListEspecificationUseCase) {}
    handle(req: Request, res: Response): Response {
        const all = this.listEspecificationUseCase.execute();

        return res.json(all);
    }
}

export default ListEspecificationController;
