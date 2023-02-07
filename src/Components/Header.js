import React from "react";
import { Link } from "react-router-dom";
import Web3Service from "./web3.server";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account:"",
      menuadmin:""
    };
  }

 async componentWillMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    // console.log(Web3Service.state.taskMap)
    this.setState({
      account:Web3Service.state.account,
      menuadmin:Web3Service.state.taskMap
    });
  }

  render() {
    let button;
    if (this.state.account) {
      button = (
        <Link className="nav-link" to="/members">
          {this.state.account}
        </Link>
      );
    } else {
      button = (
        <Link className="nav-link" to="/login">
          เข้าสู่ระบบ
        </Link>
      );
    }
    // console.log(Permission)
    let setPermission 
    if(this.state.menuadmin !== "")
    {
      setPermission = <li className="nav-item"><Link className="nav-link" to="/dasbord"> ผู้ดูแลระบบ</Link></li>
    }
    else {
      setPermission = "";
    }
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <a
              className="navbar-brand text-success logo h1 align-self-center"
              href="/"
            >
              <img
                className="logo-Header"
                src="./assets/images/NFTBlack.png"
                alt=""
              />
            </a>

            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      หน้าหลัก
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/search">
                      ค้นหา
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/abount">
                      เกี่ยวกับเรา
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      ติดต่อเรา
                    </Link>
                  </li>
                  {setPermission}
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">{button}</li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
