function Greet({userName,textColor}){// destructure props
    let styles={color:textColor};// using style dynamically.
    return (
        <>
        <div className="main">
            <h1 style={styles}>Hello: {userName}</h1>
        </div>
        </>
    )
}

export default Greet;