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

    "recommendationSettings/updateSettings"(shopId, details) {
        
        // const shopId = Reaction.getShopId();

        check(details, Object);
        check(shopId, String);
        console.log(shopId);
        console.log(details);
        //RecommendationParamsConfig.validate(details);
        //verificar role
        const a = Packages.update({
            "_id": shopId
        },{
            $set: details
        });
        console.log(a);
        return a;
    }

}

Meteor.methods(methods);