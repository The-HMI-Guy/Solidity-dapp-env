import { useState, useEffect } from "react"; //Import and use both functions for rendering
import { ethers } from "ethers"; //Interacting with our contract
import Manager from "./artifacts/contracts/Manager.sol/Manager.json"; //Contains ABI, which will instantiate and interact w/ our contract

function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [tickets, setTickets] = useState([]);
  return;
  <div></div>;
}
export default App;
