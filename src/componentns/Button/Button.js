import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    return (
      <button className="Button" type="button" onClick={this.props.onClick}>
        Button
      </button>
    );
  }
}
