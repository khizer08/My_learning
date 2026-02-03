import "./App.css";
import Lottery from "./Lottery";
import {sum} from "./helper.js";
function App() {

  let winCondition=(ticket)=>{ // this function is used as "prop" in lottery.jsx(logic component)
    return sum(ticket)===15;
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;
