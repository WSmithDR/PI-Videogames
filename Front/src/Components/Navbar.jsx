import NavButton from "./NavButton"

const NavBar = () => {
    const buttons = [
        {name: "Home", to:"/home"},
        {name: "Form", to:"/form"},
        {name: "Detail", to:"/detail/45"},
    ]
    return (
        <div>
            <div>
                {buttons.map(({name, to}, index) => <NavButton key={name+index} name={name} to={to}/>)}
            </div>
        </div>
    )
}

export default NavBar