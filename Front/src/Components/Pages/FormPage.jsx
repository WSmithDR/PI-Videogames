import { FormContainer, HomeButton } from "../../Styles/Pages/FormPage"
import CreateVideogame from "../Forms/CreateVideogame/CreateVideogame"


const FormPage = ()=>{
    return(
        <FormContainer>
            <HomeButton name={"Back To Home"} to="/home"/>
            <CreateVideogame/>
        </FormContainer>
    )
}

export default FormPage