import { useState, useEffect } from "react"; //Import and use both functions for rendering
import { ethers } from "ethers"; //Interacting with our contract
import Manager from "./artifacts/contracts/Manager.sol/Manager.json"; //Contains ABI, which will instantiate and interact w/ our contract
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [tickets, setTickets] = useState([]);

  const getTickets = async () => {
    const res = await contract.getTickets();
    setTickets(res);
  };
  const createTicket = async (_name) => {
    const transaction = await contract.createTicket(_name);
    await transaction.wait();
    getTickets();
  };
  const updateTicketStatus = async (_index, _status) => {
    const transaction = await contract.updateTicketStatus(_index, _status);
    await transaction.wait();
    getTickets();
  };
  const renameTicket = async (_index) => {
    let newName = prompt("Please enter new ticket name", "");
    const transaction = await contract.updateTicketStatus(_index, newName);
    await transaction.wait();
    getTickets();
  };
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

  return (
    <div className="page">
      <div className="header"></div>
      <p>Task Manager</p>
      {account != "" ? (
        <p>{account.substring(0, 9)}</p>
      ) : (
        <button className="big_button" onClick={initConnection}>
          Connect
        </button>
      )}
      <div className="input_section">
        <div>
          <button className="big_button" onClick={() => createTicket(name)}>
            Create Ticket
          </button>
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            placeholder="Ticket Name"
          />
        </div>
        <button className="big_button" onClick={getTickets}>
          Load data
        </button>
      </div>
      <div className="main">
        <div className="main_col" style={{ backgroundColor: "lightPink" }}>
          <div className="main_col_heading">Todo</div>
          {tickets
            .map((t, i) => ({ id: i, item: t }))
            .filter((t) => t.item.status == 0)
            .map((ticket, index) => {
              return (
                <div key={index} className="main_ticket_card">
                  <p className="main_ticket_card_id">#{ticket.id}</p>
                  <p>{ticket.item.name}</p>
                  <div className="main_ticket_button_section">
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightBlue" }}
                      onClick={() => updateTicketStatus(ticket.id, 1)}
                    >
                      Busy
                    </button>
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightGreen" }}
                      onClick={() => updateTicketStatus(ticket.id, 2)}
                    >
                      Done
                    </button>
                    <button
                      lassName="small_button"
                      style={{ backgroundColor: "lightGrey" }}
                      onClick={() => renameTicket(ticket.id)}
                    >
                      Rename
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="main_col" style={{ backgroundColor: "lightBlue" }}>
          <div className="main_col_heading">Busy</div>
          {tickets
            .map((t, i) => ({ id: i, item: t }))
            .filter((t) => t.item.status == 1)
            .map((ticket, index) => {
              return (
                <div key={index} className="main_ticket_card">
                  <p className="main_ticket_card_id">#{ticket.id}</p>
                  <p>{ticket.item.name}</p>
                  <div className="main_ticket_button_section">
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightBlue" }}
                      onClick={() => updateTicketStatus(ticket.id, 0)}
                    >
                      Todo
                    </button>
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightGreen" }}
                      onClick={() => updateTicketStatus(ticket.id, 2)}
                    >
                      Done
                    </button>
                    <button
                      lassName="small_button"
                      style={{ backgroundColor: "lightGrey" }}
                      onClick={() => renameTicket(ticket.id)}
                    >
                      Rename
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="main_col" style={{ backgroundColor: "lightGreen" }}>
          <div className="main_col_heading">Done</div>
          {tickets
            .map((t, i) => ({ id: i, item: t }))
            .filter((t) => t.item.status == 2)
            .map((ticket, index) => {
              return (
                <div key={index} className="main_ticket_card">
                  <p className="main_ticket_card_id">#{ticket.id}</p>
                  <p>{ticket.item.name}</p>
                  <div className="main_ticket_button_section">
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightBlue" }}
                      onClick={() => updateTicketStatus(ticket.id, 0)}
                    >
                      Busy
                    </button>
                    <button
                      className="small_button"
                      style={{ backgroundColor: "lightGreen" }}
                      onClick={() => updateTicketStatus(ticket.id, 1)}
                    >
                      Busy
                    </button>
                    <button
                      lassName="small_button"
                      style={{ backgroundColor: "lightGrey" }}
                      onClick={() => renameTicket(ticket.id)}
                    >
                      Rename
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default App;
