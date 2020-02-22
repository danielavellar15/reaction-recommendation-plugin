// import { AutoForm } from "meteor/aldeed:autoform";
// import { Template } from "meteor/templating";
import { Reaction } from "/client/api";
import { Packages } from "/lib/collections";
// import { RecommendationParamsConfig } from "../../lib/collections/schemas";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router";
import { compose } from "recompose";
import withOpaqueShopId from "/imports/plugins/core/graphql/lib/hocs/withOpaqueShopId";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Field from "@reactioncommerce/components/Field/v1"
import TextInput from "@reactioncommerce/components/TextInput/v1"


import React, { Component } from "react";
import { registerComponent } from "@reactioncommerce/reaction-components";
import { Meteor } from "meteor/meteor";
import { Button, SettingsCard } from "@reactioncommerce/reaction-ui";


//import "./recommendation.html";

// Template.recommendationSettings.helpers({
//   RecommendationParamsConfig() {
//     return RecommendationParamsConfig;
//   },
//   packageData() {
//     return Packages.findOne({
//       name: "recommendation",
//       shopId: Reaction.getShopId()
//     });
//   }
// });

/*
Template.recommendationSettings.events({
  "click [data-event-action=showRecommendationSettings]"() {
    Reaction.showActionView();
  }
});*/


// AutoForm.hooks({
//   recommendationSettingsForm: {
//     onSuccess() {
//       Alerts.removeSeen();
//       return Alerts.toast("SUCESSO", "success");
//     },
//     onError(operation, error) {
//       Alerts.removeSeen();

//       return Alerts.toast(`ERRO ${error}`, "error");
//     }
//   }
// });

//teste

class RecommendationSettings extends Component {
  handleUpdateDataClick = () => {
    Meteor.call("recommendationSettings/updateSettings", (error) => {
      if (error) {
        Alerts.toast(`Error updating sample data ${error.reason}`, "error");
      } else {
        Alerts.toast("Update successful", "success");
      }
    });
  }

  getNumberOfProducts() {
    const recommendationSettingsAtributtes = Packages.findOne({
      name: "recommendation",
      shopId: Reaction.getShopId()
    });
    return recommendationSettingsAtributtes.settings.num_products.toString();
  }

  render() {
    const numberProducts = this.getNumberOfProducts();

    return(
      <div>
      <Card>
        <CardContent>
          <Field 
            label={"Number of Products"} 
            labelFor="numberProductsInput"
          >
            <TextInput 
              id="numberProductsInput"
              name="numberProducts"
              value={ numberProducts || ""}
              type="number"              
            >

            </TextInput>
          </Field>
          <Button
            bezelStyle={"solid"}
            primary={true}
            label={"Save"}
            onClick={this.handleUpdateDataClick}
          />
        </CardContent>
      </Card>
      
    </div>
    );
  }
}


registerComponent("RecommendationSettings", RecommendationSettings, [
  withApollo,
  withRouter,
  withOpaqueShopId
]);

export default compose(
  withApollo,
  withRouter,
  withOpaqueShopId
)(RecommendationSettings);