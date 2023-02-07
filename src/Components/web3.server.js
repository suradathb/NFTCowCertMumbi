import Web3 from "web3";
import NFTCowCert from "../abis/NFTCowCert.json";

class Web3Service {
  constructor() {
    this.web3 = null;
    this.state = {
      account: "",
      NFTCowCert: null,
      taskMap: "",
      ownerCount: 0,
    };
  }

  async loadWeb3() {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.listenForAccountChanges();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    this.web3 = window.web3;
  }

  listenForAccountChanges() {
    window.ethereum.on("accountsChanged", (accounts) => {
      this.state.account = accounts[0];
      this.loadBlockchainData();
    });
  }

  async loadBlockchainData() {
    if (this.web3) {
      const accounts = await this.web3.eth.getAccounts();
      this.state.account = accounts[0];
      const networkId = await this.web3.eth.net.getId();
      const networkData = NFTCowCert.networks[networkId];
      const abi = NFTCowCert.abi;
      const address = networkData.address;
      const nFTCowCert = new this.web3.eth.Contract(abi, address);
      this.state.NFTCowCert = nFTCowCert;
      const ownercount = await nFTCowCert.methods
        .ownerCount()
        .call({ from: accounts[0] });
      for (var i = 0; i <= ownercount; i++) {
        const task = await nFTCowCert.methods
          .TaskMapOwner(i)
          .call({ from: accounts[0] });
       
        if (task.government === accounts[0]) {
          this.state.taskMap = task.government;
        }
      }
    }
  }
}

const web3Service = new Web3Service();
export default web3Service;
