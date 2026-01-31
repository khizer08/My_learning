import Price from "./Price";
function Product({title,idx}){
    let oldPrices=["12,495","11900","1599","599"];
    let newPrices=["8,999","9,199","899","278"];
    let description=[
        ["8,000 DPI","5 Programmable buttons"],
        ["intuituve surface","designed for iPad Pro"],
        ["designed for iPad Pro","intuituve surface"],
        ["wireless","optical orientation"]
    ]
    let styles={height:"160px",width:"200px",border:"1px solid black",margin:"4px" ,borderRadius:"14px",}
    return (
        <div className="product-card" style={styles}>
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;