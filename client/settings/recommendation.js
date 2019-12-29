import { AutoForm } from "meteor/aldeed:autoform";
import { Template } from "meteor/templating";
import { Reaction } from "/client/api";
import { Packages } from "/lib/collections";
import { RecommendationParamsConfig } from "../../lib/collections/schemas";

import "./recommendation.html";

Template.recommendationSettings.helpers({
  RecommendationParamsConfig() {
    return RecommendationParamsConfig;
  },
  packageData() {
    return Packages.findOne({
      name: "recommendation",
      shopId: Reaction.getShopId()
    });
  }
});

/*
Template.recommendationSettings.events({
  "click [data-event-action=showRecommendationSettings]"() {
    Reaction.showActionView();
  }
});*/


AutoForm.hooks({
  recommendationSettingsForm: {
    onSuccess() {
      Alerts.removeSeen();
      return Alerts.toast("SUCESSO", "success");
    },
    onError(operation, error) {
      Alerts.removeSeen();

      return Alerts.toast(`ERRO ${error}`, "error");
    }
  }
});
