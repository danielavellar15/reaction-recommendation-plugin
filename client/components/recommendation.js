import React, { Component } from "react";
import PropTypes from "prop-types";
//import { Components } from "/imports/plugins/core/components/lib";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import { Components } from "@reactioncommerce/reaction-components";
import { Products } from "/lib/collections";
import { i18next } from "/client/api";




class Recommendation extends Component {  
  
  static propTypes = {
    product: PropTypes.object
  };

  getProducts() {
    const products = Products.find({ type: 'simple' }, { limit: 2 }).fetch();
    console.log(products);
    return products;
  }
  

  render() {
     
    const { currencyCode } = "USD";
    const  products   = this.getProducts();
    const badgeLabels = {
      BACKORDER: i18next.t("productDetail.backOrder", "Backorder"),
      LOW_QUANTITY: i18next.t("productDetail.limitedSupply", "Limited Supply"),
      SOLD_OUT: i18next.t("productDetail.soldOut", "Sold Out!")
    };
    

    return (
      <div>
        <div>
          <h3>Recomendacoes</h3>
        </div>
        {/* <CatalogGrid 
          currencyCode={currencyCode}
          products={products}
          badgeLabels={badgeLabels}        
        onItemClick={(event, product) => {
          event.preventDefault();
          console.log(product.title);
        }} /> */}
        <Components.Products></Components.Products>  
      </div>
    );
  }
}

export default Recommendation;