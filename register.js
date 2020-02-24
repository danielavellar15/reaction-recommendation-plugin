// register.js
import Reaction from "/imports/plugins/core/core/server/Reaction";


Reaction.registerPackage({
  label: "Recommendation",
  name: "recommendation",
  icon: "fa fa-bar-chart",
  autoEnable: true,
  settings: {
      num_products: 5
  },
  registry: [
    {
      //Menu lateral de configuracoes de recommendacao
      label: "Recommendation Settings",
      icon: "fa fa-bar-chart",
      name: "recommendation-settings",
      provides: ["settings"],
      container: "dashboard",
      template: "recommendationSettings"
    }
  ]
});



