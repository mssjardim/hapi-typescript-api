import * as Hapi from "hapi";
import { Server } from "./config/server";

export class App {

    server: Hapi.Server;

    init() {
        const server = new Server();
        server.init().then(s => {
            this.server = s;
            this.server.start((err: Error) => {
                if (err) {
                    throw err;
                }
                console.log(`Server running at ${this.server.info.uri}`);
            });
        });
    }
}

const app = new App();
app.init();