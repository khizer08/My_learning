import { useState } from "react";

function Lottery() {
  const [ticket, setTicket] = useState([]);
  const [result, setResult] = useState("");

  let generateNum = () => {
    let number1 = Math.floor(Math.random() * 10);
    let number2 = Math.floor(Math.random() * 10);
    let number3 = Math.floor(Math.random() * 10);
    let allNUm = Number(number1 + "" + number2 + "" + number3);
    setTicket(allNUm);

    let sum = Number(number1 + number2 + number3);
    setResult(sum === 15 ? "Congratulations,you won!" : "");
  };
  return (
    <div>
      <h1>Lottery {result}</h1>
      <p>Lottery Ticket={ticket}</p>
      <button onClick={generateNum}>Get New Ticket</button>
    </div>
  );
}

export default Lottery;
