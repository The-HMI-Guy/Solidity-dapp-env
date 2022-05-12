import {useState, useEffect} from "react"; //Import and use both functions for rendering
import {ethers} from "ethers"; //Interacting with our contract
import Greeter from "./artifacts/contracts/Greeter.sol/Greater.json"; //Contains ABI, which will instantiate and interact w/ our contract


function App() {
  const [data, setData] = useState("");
  const [contract, setContract] = useState();

//Get our data from the contract
const getData = async () => {
  const data = await contract.greet();
  setData(data);
}
  //Update our data in the contract
  const UpdateData = () => {
    const transaction = await contract.setGreeting(data);
    await transaction.wait();
    getData();
  }
}