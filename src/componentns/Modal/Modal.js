import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseOnEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseOnEscape);
  }

  handleCloseOnEscape = (e) => {
    if (e.code !== "Escape") return;
    console.log(e.code);
    const { onClick } = this.props;
    onClick(e.code);
  };
  render() {
    return (
      <div className="Overlay" onClick={this.props.onClick}>
        <div className="Modal">
          <img src={this.props.src} alt="" width="800" height="600" />
        </div>
      </div>
    );
  }
}
