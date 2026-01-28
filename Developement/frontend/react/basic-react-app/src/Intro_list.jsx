import Intro from './Intro.jsx';

function Intro_list(){
    let features=["html"," css"," js"];
    return(
        <>
        <Intro greet="hii"name="khizer" features={features} />
        </>
    );
}
export default Intro_list;