import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="shadow">
        <div className="container-fluid py-3">
          <img src="https://olcha.uz/_nuxt/logo-red.e48e0ab8.svg" alt="" />
        </div>
      </header>
    );
  }
}

export default Header;
