import React, { Component } from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "../Page/Header";

class MenuMinuman extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Minuman Favorite</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {DaftarMinuman.map((value, index) => {
                return (
                  <td key={index}>
                    <center>
                      <img
                        src={value.img}
                        alt="Product Minuman"
                        width="150"
                        height="100"
                      />
                      <p>{value.NamaMinuman}</p>
                      <p>Harga Rp. {value.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMinuman;
