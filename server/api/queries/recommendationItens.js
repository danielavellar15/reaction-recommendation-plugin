import ReactionError from "@reactioncommerce/reaction-error";
import axios from "axios"

/**
 * @name recommendationItens
 * @method
 * @memberof Catalog/NoMeteorQueries
 * @summary query the Catalog by shop ID and/or tag ID
 * @param {Object} context - an object containing the per-request state
 * @param {Object} params - request parameters
 * @param {String[]} [params.shopIds] - Shop IDs to include (OR)
 * @param {String[]} [params.tags] - Tag IDs to include (OR)
 * @returns {Promise<MongoCursor>} - A MongoDB cursor for the proper query
 */
export default async function recommendationItens(context, { shopIds, tagIds } = {}) {
  
  const url = 'http://nodejs-api-recommendation:3100/recommendation/products'; // TODO COLOCAR EM .ENV


  
  const { collections } = context;
  const { Catalog } = collections;

  if ((!shopIds || shopIds.length === 0) && (!tagIds || tagIds.length === 0)) {
    throw new ReactionError("invalid-param", "You must provide tagIds or shopIds or both");
  }

  const query = {
    "product.isDeleted": { $ne: true },
    "product.isVisible": true
  };

  //if (shopIds) query.shopId = { $in: shopIds };
  //if (tagIds) query["product.tagIds"] = { $in: tagIds };

  const response = await axios.post(url, { type:'BY_USER', shopIds: shopIds })
  console.log(response.data)

  const catalog = JSON.parse( response.data);

  // console.log(catalog)

  const result = {   
    nodes: catalog,
    pageInfo: { hasNextPage: false,
    hasPreviousPage: false,
    startCursor: '',
    endCursor: '' },
    totalCount: catalog.lenght
  }

  console.log(result)

  return result;
}
