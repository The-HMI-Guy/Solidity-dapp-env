import { useState, useEffect } from "react"; //Import and use both functions for rendering
import { ethers } from "ethers"; //Interacting with our contract
import Manager from "./artifacts/contracts/Manager.sol/Manager.json"; //Contains ABI, which will instantiate and interact w/ our contract

function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [tickets, setTickets] = useState([]);

  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      //Bring popup for MetaMask
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const newSigner = provider.getSigner(); //Gives us the ability to perform request on the contract
      setAccount(accounts[0]);
      setContract(
        new ethers.Contract(
          "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", //Contract address
          Manager.abi, //Contract abi
          newSigner //Signer from MetaMask account
        )
      );
    } else {
      console.log("Please install MetaMask.");
    }
  };
  useEffect(() => {
    initConnection();
  }, []);
  console.log(contract);
  return;
  <div>{account}</div>;
}
export default App;
