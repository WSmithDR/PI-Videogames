import { NavigationBar } from "../Styles/StyledNavbar";
import { SearchVideogameByName } from "./../Components/SearchVideogameByName";
import NavButton from "./NavButton";

const NavBar = () => {
    const buttons = [
        {name: "Home", to:"/home"},
        {name: "Create a videogame", to:"/form"}
    ]
    return (
        <div>
            <NavigationBar>
                {buttons.map(({name, to}, index) => <NavButton key={name+index} name={name} to={to}/>)}
                <SearchVideogameByName/>
            </NavigationBar>
        </div>
    )
}

export default NavBar