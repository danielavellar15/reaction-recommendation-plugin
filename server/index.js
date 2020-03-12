import "./methods"
import "./i18n";
import Logger from "@reactioncommerce/logger";
import resolvers from "./api/resolvers/index.js";
import queries from "./api/queries/index.js";
import schemas from "./api/schemas/index.js";
import startup from "./startup.js"


export default async function register(app) {
    await app.registerPlugin({
        label: "Recommendation",
        name: "reaction-recommendation",
        functionsByType: {
            startup: [startup]
        },
        graphQL: {
            resolvers,
            schemas
        },
        queries
    });
}