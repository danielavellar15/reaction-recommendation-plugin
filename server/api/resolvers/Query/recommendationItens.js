import { decodeShopOpaqueId, decodeTagOpaqueId } from "../../xforms/id.js";
import getPaginatedResponse from "../../../../../../../utils/graphql/getPaginatedResponse.js";


export default async function recommendationItens(_, args, context, info) {

    const { shopIds: opaqueShopIds, tagIds: opaqueTagIds, ...connectionArgs } = args;

    const shopIds = opaqueShopIds && opaqueShopIds.map(decodeShopOpaqueId);
    const tagIds = opaqueTagIds && opaqueTagIds.map(decodeTagOpaqueId);

    const query = await context.queries.recommendationItens(context, {
        shopIds,
        tagIds
    });
    console.log(query)

    return query;
    

    // return getPaginatedResponse(query, connectionArgs); 
}