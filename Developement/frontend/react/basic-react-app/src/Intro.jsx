import './Intro.css';
function Intro({greet,name}){// "greet" and "name" are destructure props
  return (
    <>
    <h1 className='greet'>{greet}</h1>
    <h2 className='name'>I'm {name}</h2>
    </>
  );
}

export default Intro;