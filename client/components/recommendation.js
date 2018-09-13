import React from "react";
import PropTypes from "prop-types";
import { Components } from "/imports/plugins/core/components/lib";


class Recommendation extends React.Component {
  static propTypes = {
    product: PropTypes.object
  };

  render() {

    return (
      <div>
        <div>
          <h3>Recomendações</h3>
        </div>
        <Components.Products></Components.Products>
      </div>
    );
  }
}

export default Recommendation;