import NavButton from "../Components/NavButton"
import VdgDetail from "../Components/VdgDetail"
import { Details } from "../Styles/DetailPage"

const DetailPage = ()=>{
    return(
        <Details>
            <NavButton name={"Back To Home"} to="/home"/>
            <VdgDetail/>
        </Details>
    )
}

export default DetailPage