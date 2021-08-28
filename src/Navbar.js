const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="container">
                <a href="/"><span>Home</span></a>
                <a href="/create"><span>New Blog</span></a>
            </div>
        </nav>
    );
}
 
export default Navbar;