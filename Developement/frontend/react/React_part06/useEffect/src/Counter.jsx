import { useState , useEffect } from "react"

function Counter(){

    const [countx,setCountx]=useState(0);
    const [county,setCounty]=useState(0);

    let counterFunx=()=>{
        setCountx((countx)=>countx+1);
    }
    let counterFuny=()=>{
        setCounty((county)=>county+1);
    }

    useEffect(function printStuff(){
        console.log("rendered",)
    },[countx])


    return (
        <div>
            <h2>Counterx={countx}</h2>
            <button onClick={counterFunx}>+1</button>
            <h2>Countery={county}</h2>
            <button onClick={counterFuny}>+1</button>
        </div>
    )
}

export default Counter;