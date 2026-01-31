import './Intro.css';
function Intro({greet,name,features}){// "greet" "name" "features" are destructure props.
  return (
    <>
    <h1>{greet}</h1>
    <h2 className='name'>I'm {name}</h2>
    <h3>
      {features.map((feature)=>(
        <li>{feature}</li>
        ))}
    </h3>
    {name=='khizer'?<p>authentic</p>:null}
    </>
  );
}

export default Intro;