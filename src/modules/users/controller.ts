
import * as Hapi from "hapi";

export interface IUserController {
    getById(request: Hapi.Request, reply: Hapi.ReplyNoContinue): any;
}

export class UserController implements IUserController {

    getById(request: Hapi.Request, reply: Hapi.ReplyNoContinue) {
        reply({ name: "Marco" });
    }
}