import SimpleSchema from "simpl-schema";
import { PackageConfig } from "/lib/collections/schemas";
import { registerSchema } from "@reactioncommerce/schemas";

/**
 * @name RecommendationParamsConfig
 * @memberof Schemas
 * @type {SimpleSchema}
 */
export const RecommendationParamsConfig = PackageConfig.clone().extend({
  // Remove blackbox: true from settings obj
  "settings": {
    type: Object,
    optional: true,
    defaultValue: {}
  },
  "settings.params": {
    type: Object,
    optional: true,
    defaultValue: {}
  },
  "settings.params.num_products": {
    type: SimpleSchema.Integer,
    label: "Number of products",
    defaultValue: 5,
    max: 10,
    min: 1
  }
});

registerSchema("RecommendationParamsConfig", RecommendationParamsConfig);
