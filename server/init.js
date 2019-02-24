import _ from "lodash";
import ProductDetailPageSimpleLayout from "/imports/plugins/included/product-detail-simple/lib/layout/simple";
import Logger from "@reactioncommerce/logger";
import Reaction from "/imports/plugins/core/core/server/Reaction";


function changeProductDetailPageLayout() {
  Logger.info("::: changing layouts of product detail page");
  const customPdpLayout = ProductDetailPageSimpleLayout();
   
      var new_component = {

        type: "block",
        columns: 12,
        size: "full",
        permissions: ["admin"],
        audience: ["guest", "anonymous"],
        style: {
          "@media  only screen and (max-width: 921px)": {
            minWidth: "100%",
            maxWidth: "100%"
          }
        },
        children: [
          {
            component: "Recommendation"
          }
        ]
      }
      
      customPdpLayout.push(new_component);
    

  Reaction.registerTemplate({
    name: "productDetailSimple",
    title: "Product Detail Simple Layout",
    type: "react",
    templateFor: ["pdp"],
    permissions: ["admin", "owner"],
    audience: ["anonymous","guest"],
    template: customPdpLayout
  });
}

changeProductDetailPageLayout();