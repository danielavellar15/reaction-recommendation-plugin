import SimpleSchema from "simpl-schema";
import { PackageConfig } from "/lib/collections/schemas";
import { registerSchema } from "@reactioncommerce/schemas";

/**
 * @name RecommendationParamsConfig
 * @memberof Schemas
 * @type {SimpleSchema}
 */
export const RecommendationParamsConfig = PackageConfig.clone().extend({
  "settings": {
    type: Object,
    optional: true,
    defaultValue: {}
  },
  "settings.num_products": {
    type: String,
    label: "Number of products",
    max: 10,
    min: 1,
    optional: true
  }
});

registerSchema("RecommendationParamsConfig", RecommendationParamsConfig);
