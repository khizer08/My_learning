function doSomething(){
    console.log("Hello world");
}

function ButtonEvent(){
    return(
        <>
        <button onClick={doSomething}>click me!</button>
        </>
    )
}

export default ButtonEvent;