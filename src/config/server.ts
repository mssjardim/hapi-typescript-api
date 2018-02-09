import * as Hapi from "hapi";

import plugins from "../plugins";
import modules from "../modules";
import { Promise } from "core-js";

export class Server {

    public hapiServer: Hapi.Server;

    public init(): Promise<Hapi.Server> {

        return new Promise<Hapi.Server>(resolve => {

            this.hapiServer = new Hapi.Server();

            this.config();

            this.registerPlugins()
                .then(() => {
                    this.registerModules()
                        .then(() =>
                            resolve(this.hapiServer)
                        );
                });
        });
    }

    private config(): void {
        this.hapiServer.connection({
            port: 3000,
            routes: {
                cors: true
            },
            labels: ["api"]
        });
    }

    private registerPlugins(): Promise<void> {
        return new Promise<void>(resolve => {
            plugins.forEach(plugin => {
                this.hapiServer.register(plugin, (err) => {
                    if (err) {
                        throw err;
                    }
                });
            });
            resolve();
        });
    }

    private registerModules(): Promise<any> {
        return new Promise<void>(resolve => {
            modules.forEach(module => {
                this.hapiServer.route(module);
            });
            resolve();
        });
    }
}