import { Details } from "../../Styles/Pages/DetailPage"
import NavButton from "../Navigation/NavButton"
import VdgDetail from "../Videogames/VdgDetail"

const DetailPage = ()=>{
    return(
        <Details>
            <NavButton name={"Back To Home"} to="/home"/>
            <VdgDetail/>
        </Details>
    )
}

export default DetailPage