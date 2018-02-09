import { Server } from "../../../src/config/server";
import * as Hapi from "hapi";

describe("UserController Tests", () => {

    let server: Hapi.Server;

    beforeAll(done => {
        new Server().init().then(s => {
            server = s;
            server.start(err => {
                if (err) {
                    throw err;
                }
                done();
            });
        });
    }, 10000);

    it("/GET /users/1", done => {
        server.inject(
            {
                method: 'GET',
                url: "/users"
            }, (res) => {
                const user = JSON.parse(res.payload);
                expect(user.name).toBe("Marco");
                done();
            }
        );
    });

    afterAll(() => {
        server.stop();
    });
});