import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

function Lottery({n=3, winCondition}) {
  const [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

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
