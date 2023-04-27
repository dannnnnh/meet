import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
  }

  getStyle() {
    return {
      color: this.color,
    };
  }

  render() {
    return (
      <div
        className="Alert"
        style={{
          backgroundColor: "rgba(0, 0, 255, 0.1)", // To give a light blue background color
          borderRadius: "5px", // To give rounded corners
          padding: "10px", // Padding around the text
          fontSize: "1.2em", // Increase the font size for better visibility
        }}
      >
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

export { InfoAlert, ErrorAlert };
