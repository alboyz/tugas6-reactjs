import React, { Component } from "react";
import DaftarMakanan from "../Lib/DaftarMakanan";
import Header from "../Page/Header";

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3>Daftar Makanan Favorite</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {DaftarMakanan.map((value, index) => {
                return (
                  <td key={index}>
                    <center>
                      <img
                        src={value.img}
                        alt="Product Makanan"
                        width="150"
                        height="100"
                      />
                      <p>{value.NamaMakanan}</p>
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

export default MenuMakanan;
