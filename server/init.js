import _ from "lodash";
import ProductDetailPageSimpleLayout from "/imports/plugins/included/product-detail-simple/lib/layout/simple";
import Hooks from "@reactioncommerce/hooks";
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
          // Recommendation component
          {
            component: "Recommendation"
          }
        ]
      }
      
      customPdpLayout.push(new_component);
      /*for (const child of item.children) {
        if (child.component === "ProductMetadata") {
          child.component = "Recommendation";
        }
      }*/
    

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