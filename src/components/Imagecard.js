import React from "react";

class Imagecard extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image.urls.regular}
          alt={this.props.image.description}
        />
      </div>
    );
  }
}

export default Imagecard;
