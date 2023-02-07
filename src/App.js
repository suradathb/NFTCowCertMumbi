import React from "react";
import { BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Member from "./Components/Member";
import Web3Service from "./Components/web3.server";
import DasbordAdmin from "./Components/DasbordAdmin";
import AddOwner from "./Components/AddOwner";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account:"",
      nftcow:null
    };
  }
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    console.log(Web3Service.state.NFTCowCert);
    this.setState({
      account : Web3Service.state.account
    });
  }
  render() {
    return (
      <>
        <Header account={this.state.account.toLocaleLowerCase()}/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/members" element={<Member/>}/>

          {/* admin Menu setup start */}
          <Route path="/dasbord" element={<DasbordAdmin/>}/>
          <Route path="/addowner" element={<AddOwner/>}/>
          {/* admin Menu setup end */}
        </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
