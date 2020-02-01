import React, { Component } from "react";
import "../Style/Header.css";
import Header from "../Page/Header";

class MenuHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <br />
        <h1>
          <center>Selamat Datang Di Halaman Masakan Nusantara </center>
        </h1>
        <div className="image_header">
          <img
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=comp;ress&cs=tinysrgb&dpr=1&w=500"
            alt="restoran"
          />
          <br />
        </div>
      </div>
    );
  }
}

export default MenuHome;
