import { useState } from "react";

function Counter(){
    let [count,setCount]=useState(0);

    let countInc =()=>{
        setCount((count)=>{// handling it by "callback" as it is synchronously working.
            return count+1;
        });
        setCount((count)=>{
            return count+1;
        });
    }

    return(
        <div>
        <h1>counter: {count}</h1>
        <button onClick={countInc}>Click me!</button>
    </div>
    );
}


export default Counter;;