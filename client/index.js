//import "./components";
//import "./container";
//import "./styles/layout.less";
import React from "react";

import RecommendationSettingsPage from "./pages/recommendation"

import { registerOperatorRoute } from "/imports/client/ui";
import AccountIcon from "mdi-material-ui/ChartBar";


registerOperatorRoute({
    isNavigationLink: true,
    isSetting: false,
    path: "/recommendation",
    priority: 41,
    mainComponent: RecommendationSettingsPage,
    // eslint-disable-next-line react/display-name, react/no-multi-comp
    SidebarIconComponent: (props) => <AccountIcon {...props} />,
    sidebarI18nLabel: "admin.settings.recommendationLabel"
  });