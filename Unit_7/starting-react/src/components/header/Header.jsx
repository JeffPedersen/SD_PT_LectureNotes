function Header() {
    // We can create any logic we like inside the function and before the return
    let name = "enho";


    return(
        <header>
            <h1>Welcome to {name}'s first react App</h1>
            <h1>{10+10}</h1>
        </header>
    )
}

export default Header;