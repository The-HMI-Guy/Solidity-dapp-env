import { useState, useEffect } from "react"; //Import and use both functions for rendering
import { ethers } from "ethers"; //Interacting with our contract
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json"; //Contains ABI, which will instantiate and interact w/ our contract


function App() {
  const [data, setData] = useState("");
  const [contract, setContract] = useState();

  //Get our data from the contract
  const getData = async () => {
    const data = await contract.greet(); //await contract and call greet method
    setData(data);
  };
  //Update our data in the contract
  const updateData = async () => {
    const transaction = await contract.setGreeting(data); //await contract and send data to setGreeting method
    await transaction.wait();
    getData();
  };
  const initConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      //Check to see if we have an etheruem object in the browser i.e. MetaMask
      await window.ethereum.request({ method: "eth_requestAccounts" }); //Popup a window and ask the user to sign, which gives us the right privilege to query the blockchain
      const provider = new ethers.providers.Web3Provider(window.ethereum); //MetaMask
      const signer = provider.getSigner();
      setContract(
        //Create new contract instance. Store data below into setContract
        new ethers.Contract(
          "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          Greeter.abi,
          signer
        )
      );
    } else {
      console.log("Please install MetaMask.");
    }
  };
  useEffect(() => {
    initConnection();
  }, []);

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <button onClick={updateData}>Set Data</button>
      <input
        onChange={(e) => setData(e.target.value)}
        placeholder="New Greeting"
      />
      <p>{data}</p>
    </div>
  );
}
export default App;