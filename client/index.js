import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { registerOperatorRoute } from "/imports/client/ui";

import "./components";
import "./container";
import "./settings/recommendation.js";
import "./settings/recommendation.html";
import "./styles/layout.less";

registerOperatorRoute({
    isNavigationLink: true,
    isSetting: true,
    path: "/recommendationSettings",
    mainComponent: "recommendationSettings",
    // eslint-disable-next-line react/display-name, react/no-multi-comp
    SidebarIconComponent: (props) => <FontAwesomeIcon icon={faSignInAlt} {...props} />,
    sidebarI18nLabel: "Teste RecommendationSettings"
  });