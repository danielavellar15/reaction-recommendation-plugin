import { Reaction } from "/client/api";
import { Packages } from "/lib/collections";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";
import { withRouter } from "react-router";
import { composeWithTracker } from "@reactioncommerce/reaction-components";
import withOpaqueShopId from "/imports/plugins/core/graphql/lib/hocs/withOpaqueShopId";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Field from "@reactioncommerce/components/Field/v1"
import TextInput from "@reactioncommerce/components/TextInput/v1"
import React, { Component } from "react";
import { registerComponent } from "@reactioncommerce/reaction-components";
import { Meteor } from "meteor/meteor";
import { Button, SettingsCard } from "@reactioncommerce/reaction-ui";

class RecommendationSettings extends Component {

  defaultValues;

  constructor(props) {
    super(props);

    this.state = {
      settings: {
        num_products: ''
      }
    }

    this.defaultValues = {
      settings: {
        num_products: props.packageData.settings.num_products.toString()
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    
    this.setState({
      settings: {
        [name]: value
      }
    });
  }

  handleUpdateDataClick = () => {
    const packageId = this.props.packageData._id;    
    const state = this.state;

    Meteor.call("recommendationSettings/updateSettings", packageId, state, (error) => {
      if (error) {
        Alerts.toast(`Error updating sample data ${error.reason}`, "error");
      } else {
        Alerts.toast("Update successful", "success");
      }
    });
  }

  render() {
    return(
      <div>
        <form>
          <Card>
            <CardContent>
              <Field 
                label={"Numero de produtos"} 
                labelFor="numberProductsInput"
              >
                <TextInput 
                  id="numberProductsInput"
                  name="num_products"
                  value={this.state.settings.num_products || this.defaultValues.settings.num_products}
                  onChange={this.handleInputChange}
                  type="number"              
                >

                </TextInput>
              </Field>
              <Button
                bezelStyle={"solid"}
                primary={true}
                label={"Salvar"}
                onClick={this.handleUpdateDataClick}
              />
            </CardContent>
          </Card>
        </form>      
    </div>
    );
  }
}

RecommendationSettings.propTypes = {
  packageData: PropTypes.object
};

const composer = (props, onData) => {
  const subscription = Meteor.subscribe("Packages", Reaction.getShopId());
  if (subscription.ready()) {
    const packageData = Packages.findOne({
      name: "recommendation",
      shopId: Reaction.getShopId()
    });
    onData(null, { packageData });
  }
};

registerComponent("RecommendationSettings", RecommendationSettings, [
  composer,
  withApollo,
  withRouter,
  withOpaqueShopId
]);

export default composeWithTracker(
  composer,
  withApollo,
  withRouter,
  withOpaqueShopId
)(RecommendationSettings);