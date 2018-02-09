import * as Hapi from "hapi";
import { UserController } from "./controller";

const userController: UserController = new UserController();

const UserRoute: Hapi.RouteConfiguration = {
    method: "GET",
    path: "/users",
    handler: userController.getById,
    config: {
        tags: ["api"]
    }
};

export default UserRoute;