import React, { Component } from "react";

export default class ImageGalleryItem extends Component {
  render() {
    return this.props.articles.map(({ id, webformatURL, largeImageURL }) => (
      <li className="ImageGalleryItem" key={id} onClick={this.props.onClick}>
        <img
          src={webformatURL}
          alt=""
          data-largeimg={largeImageURL}
          className="ImageGalleryItem-image"
        />
      </li>
    ));
  }
}
