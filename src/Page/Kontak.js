import React, { Component } from "react";
import Header from "../Page/Header";
import "../Style/Kontak.css";

class Kontak extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="BackgraundImage"
          width="1350"
          height="350"
        />
        <div className="Kontak">
          <center>
            <h3>
              jl.Swadaya.IV pd. Ranggon Cipayung, Kota Jakarta Timur Daerah
              Khusus Ibukota 13860{" "}
            </h3>
            <p>08123456789</p>
          </center>
        </div>
      </div>
    );
  }
}
export default Kontak;
