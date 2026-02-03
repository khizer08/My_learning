import TicketNum from "./TicketNum";
import "./Ticket.css";

function Ticket({ ticket }) {
  return (
    <div className="Ticket">
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} /> // we are using "key" here because console will give error of every child in a "list" must have unique "key prop".
      ))}
    </div>
  );
}

export default Ticket;
