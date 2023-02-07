import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Web3Service from "./web3.server";

class DasbordAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      nftcow: null,
    };
  }

  async componentWillMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    this.state = {
      account: Web3Service.state.account,
      nftcow: Web3Service.state.NFTCowCert,
    };
  }

  render() {
    return (
      <>
        <div class="container-fluid bg-light py-5">
          <div class="col-md-12 m-auto text-center">
            <h1 class="h1">ผู้ดูแลระบบ</h1>
            <div class="input-group mb-3">
              <p></p>
            </div>
          </div>
        </div>
        <div class="container py-5">
          <div class="row py-5">
            <form
              class="col-md-12 m-auto"
              role="form"
              // onSubmit={() => alert(JSON.stringify(this.state))}
              onSubmit={(event) => {
                event.preventDefault();
                // console.log(this.state)
                this.searchChanged();
              }}
            >
              <div className="Add-app">
                <Link class="btn btn-success btn-lg px-3" to="/addowner">
                  สร้างผู้ดูแล &nbsp;
                  <i className="fa fa-plus-circle"></i>
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link class="btn btn-success btn-lg px-3" to="/AddCowCert">
                  สร้าง CowCert &nbsp;
                  <i className="fa fa-plus-circle"></i>
                </Link>
                <hr />
                {/* <p>Totals : {this.state.coinCow} รายการ</p> */}
              </div>

              <table class="table table-responsive-md">
                <thead>
                  <tr>
                    <th scope="col">รหัสวัว</th>
                    <th scope="col">รูป</th>
                    <th scope="col">ชื่อวัว</th>
                    <th scope="col">เจ้าของวัว</th>
                    <th scope="col">สถานะเหรียญ</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default DasbordAdmin;
