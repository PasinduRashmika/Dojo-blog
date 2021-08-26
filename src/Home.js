const Home = () => {

    const handelClick= ()=>{
        console.log("Hello Pasindu");
    
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button  className="btn1" onClick={
                handelClick}>Click Me</button>
            <button className="btn1" onClick={
                ()=>{console.log('Hi Pasindu')}}>Click Again</button>
        </div>
    );
}
 
export default Home;