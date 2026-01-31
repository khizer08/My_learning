import './App.css'
import Product from './Product'

function App() {

  let styles={display:"flex",flexWarp:"warp",justifyContent:"center",alignItems:"center"}

  return (
    <>
    <h1>BlockBuster Deals on Computer Accessories | Shop Now</h1>
    <div className='all-product' style={styles}>
      <Product title="Logitech Mx Master"idx={0}/>
      <Product title="Apple Pencil (2nd Gen)"idx={1}/>
      <Product title="Zenronics Zeb-transformer"idx={2}/>
      <Product title="Petronics Toad 23"idx={3}/>
    </div>
    </>
  )
}

export default App