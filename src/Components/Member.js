import React from "react";
import "./Member.css";
import Web3Service from "./web3.server";


class Member extends React.Component {
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
    this.setState({
      account: Web3Service.state.account,
      nftcow: Web3Service.state.NFTCowCert,
    });
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-light py-5">
          <div className="col-md-6 m-auto text-center">
            <img
              className="imgPreview"
              src="../assets/images/NFTBlack.png"
              alt=""
            />
            <p class="inputname">{this.state.account.toLocaleLowerCase()}</p>
          </div>
        </div>
        <div className="container py-5">
          <div className="row py-5">
            <table class="table table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">รหัสโค</th>
                  <th scope="col">รูปโค</th>
                  <th scope="col">ชื่อโค</th>
                  <th scope="col">เจ้าของวัว</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Member;
