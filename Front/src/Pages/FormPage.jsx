import CreateVideogame from "../Components/CreateVideogame"
import { FormContainer, HomeButton } from "../Styles/FormPage"


const FormPage = ()=>{
    return(
        <FormContainer>
            <HomeButton name={"Back To Home"} to="/home"/>
            <CreateVideogame/>
        </FormContainer>
    )
}

export default FormPage