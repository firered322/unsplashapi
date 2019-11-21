import React from "react";
import axios from "axios";
import Searchbox from "./Searchbox";
import Imagelist from "./Imagelist";

class App extends React.Component {
  state = {
    images: [],
    query: ""
  };
  onSearchSubmit = term => {
    this.setState({
      query: term
    });
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: term
        },
        headers: {
          Authorization:
            "Client-ID 9ac03a9226b2f6c1174fa5f6e521d4de791d79506f72fa1163784851cdf4bc7c"
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbox onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images for the query {this.state.query}
        .
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;
