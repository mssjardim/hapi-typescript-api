import * as Hapi from "hapi";

import UsersModule from "./users";

const IndexRoute: Hapi.RouteConfiguration = {
    method: "GET",
    path: "/",
    handler: (request: Hapi.Request, reply: Hapi.ReplyNoContinue) => {
        reply({
            title: "API",
            version: "1.0.0",
            docs: "http://localhost:3000/docs"
        });
    }
};

export default [
    IndexRoute,
    UsersModule
];

