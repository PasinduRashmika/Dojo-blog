const Home = () => {

    const handelClick= ()=>{
        console.log("Hello Pasindu");
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handelClick()}>Click Me</button>
        </div>
    );
}
 
export default Home;