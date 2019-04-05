// register.js
import Reaction from "/imports/plugins/core/core/server/Reaction";


Reaction.registerPackage({
  label: "Recommendation",
  name: "recommendation",
  icon: "fa fa-bar-chart",
  autoEnable: true,
  settings: {
    params: {
      num_products: 5
    }
  },
  registry: [
    {
      provides: ["dashboard"],
      route: "/dashboard/shipping",
      name: "recommendation",
      label: "Recommendation",
      description: "Recommendation Dashboard",
      container: "core",
      icon: "fa fa-bar-chart"      
    },
    {
      //Menu lateral de configuracoes de recommendacao
      label: "Recommendationsettings",
      icon: "fa fa-bar-chart",
      name: "/settings/recommendationSettings",
      provides: ["settings"],
      container: "dashboard",
      description: "Recommendation Settings",
      template: "recommendationSettings"
    }
  ]
});

