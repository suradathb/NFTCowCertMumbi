import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <footer className="bg-dark" id="tempaltemo_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-5 footer">
                <img
                  className="logo-Footer"
                  src="./assets/images/NFTWrite.png"
                  alt=""
                />
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <i className="fas fa-map-marker-alt fa-fw"></i>
                    คอนโดบ้านชื่อตรง เลขที่ 302/724 อาคาร 5 ชั้น 8 แขวง
                    คลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพมหานคร 10310
                  </li>
                  <li>
                    <i className="fa fa-phone fa-fw"></i>
                    <a className="text-decoration-none" href="tel:084-030-1191">
                      084-030-1191
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-envelope fa-fw"></i>
                    <a
                      className="text-decoration-none"
                      href="mailto:bondnuy007@me.com"
                    >
                      Bondnuy007@me.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 pt-5"></div>

              <div className="col-md-4 pt-5">
                <h2 className="h2 text-light border-bottom pb-3 border-light">
                  ข้อมูลเพิ่มเติม
                </h2>
                <ul className="list-unstyled text-light footer-link-list">
                  <li>
                    <Link className="text-decoration-none" to="/">
                      หน้าหลัก
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/search">
                      ค้นหา
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" to="/abount">
                      เกี่ยวกับเรา
                    </Link>
                  </li>
                  {/* {setPermission} */}
                  <li>
                    <Link className="text-decoration-none" to="/contact">
                      ติดต่อเรา
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row text-light mb-4">
              <div className="col-12 mb-3">
                <div className="w-100 my-3 border-top border-light"></div>
              </div>
              <div className=" me-auto socal">
                <ul className="list-inline text-left footer-icons">
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.facebook.com/gtonuy.shonan"
                    >
                      <i className="fab fa-facebook-f fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.instagram.com/gto_nuy/"
                    >
                      <i className="fab fa-instagram fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://twitter.com/GTO_NUY"
                    >
                      <i className="fab fa-twitter fa-lg fa-fw"></i>
                    </a>
                  </li>
                  <li className="list-inline-item border border-light rounded-circle text-center">
                    <a
                      className="text-light text-decoration-none"
                      target="_blank"
                      href="https://www.linkedin.com/in/suradath-bangnikrai-50b825140/"
                    >
                      <i className="fab fa-linkedin fa-lg fa-fw"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-auto"></div>
            </div>
          </div>

          <div className="w-100 bg-black py-3">
            <div className="container">
              <div className="row pt-2">
                <div className="col-12">
                  <p className="text-left text-light con">
                    Copyright &copy; 2021 Company Name | Designed by{" "}
                    <a
                      rel="sponsored"
                      href="https://www.facebook.com/gtonuy.shonan"
                      target="_blank"
                    >
                      Suradth Bangnikrai
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
