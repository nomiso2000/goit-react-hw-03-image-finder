import React, { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className="ImageGallery">
        <ImageGalleryItem
          articles={this.props.articles}
          onClick={this.props.onClick}
        />
      </ul>
    );
  }
}
