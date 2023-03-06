import React, { Component } from "react";

class Background extends Component {
  render() {
    console.log("Homepage - Rendered");

    return (
      <body class="bg-gradient-to-t from-lime-300 via-lime-200 to-lime-200 font-sans"></body>
    );
  }
}

export default Background;
