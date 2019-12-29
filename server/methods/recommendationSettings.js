import { RecommendationParamsConfig } from "../../lib/collections/schemas";
import { check, Match } from "meteor/check";
import { Packages } from "/lib/collections";
import Logger from "@reactioncommerce/logger";
import { Meteor } from "meteor/meteor";
import Reaction from "/imports/plugins/core/core/server/Reaction";




export const methods = {
    /**
     * Funcao para atualzar as configuracoes da recomendacao
     *  
     */

    "recommendationSettings/updateSettings"(details, docId) {
        console.log(details);

        check(details, Object);

        // Backward compatibility
        check(docId, Match.Optional(String));
        const id = docId || details._id;
        const modifier = docId ? details : details.modifier;

        check(id, String);
        RecommendationParamsConfig.validate(modifier, { modifier: true });
        //verificar role
        Packages.update(id, modifier);


        return { type: "update" };
    }

}

Meteor.methods(methods);