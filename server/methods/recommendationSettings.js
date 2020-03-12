import { check, Match } from "meteor/check";
import { Packages } from "/lib/collections";
import { Meteor } from "meteor/meteor";

export const methods = {
    /**
     * Funcao para atualzar as configuracoes da recomendacao
     *  
     */
    "recommendationSettings/updateSettings"(shopId, details) {
        
        // const shopId = Reaction.getShopId();
        check(details, Object);
        check(shopId, String);
        
        //verificar role
        return Packages.update({
            "_id": shopId
        },{
            $set: details
        });
    }

}

Meteor.methods(methods);