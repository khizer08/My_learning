import { useState } from "react";

function LudoColor(){

    const [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0})

    let blueMoves=()=>{
         setMoves((moves)=>{
            return {...moves,blue:moves.blue+1};
    });
    };
    let yellowMoves=()=>{
         setMoves((moves)=>{
            return {...moves,yellow:moves.yellow+1};
    });
    };
    let greenMoves=()=>{
         setMoves((moves)=>{
            return {...moves,green:moves.green+1};
    });
    };
    let redMoves=()=>{
         setMoves((moves)=>{
            return {...moves,red:moves.red+1};
    });
    };
    return (
        <div className="main-board">

            <p>Blue={moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={blueMoves}>+1</button>

            <p>Yellow={moves.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={yellowMoves}>+1</button>

            <p>Green={moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={greenMoves}>+1</button>

            <p>Red={moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={redMoves}>+1</button>

        </div>
    )
}

export default LudoColor;