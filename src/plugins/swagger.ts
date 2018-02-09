const hapiSwagger = require("hapi-swagger");

const options = {
    info: {
        title: "API",
        version: "1.0.0",
        description: "API Documentation"
    },
    swaggerUI: true,
    documentationPage: true,
    documentationPath: "/docs"
};

const swagger = {
    register: hapiSwagger,
    options: options
};

export default swagger;