import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

function Lottery({n=3, winningSum=15}) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = sum(ticket) === winningSum;

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery</h1>
      <span><b>{isWinning && "Congratulations! You Won"}</b></span>
      <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Get New Ticket</button>
    </div>
  );
}

export default Lottery;
