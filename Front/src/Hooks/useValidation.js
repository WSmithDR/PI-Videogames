const wordDescriptionCount = 10

const useValidation = (state) =>{
    let inputErrors = {}
    for(let prop in state){
        const content = state[prop]
        let text = ""
        if(typeof content === "string"){
            let errors = []
            if(content.length===0){
                text = `${prop} cannot be empty.`
                inputErrors[prop]=[...inputErrors[prop], text]
            }
            if(prop==="description"){
                const amountWords = content.split(" ").length
                if(amountWords < wordDescriptionCount){
                    text = `${prop} must have at least ${wordDescriptionCount} words.`
                    inputErrors = {...inputErrors, [prop]:[...inputErrors[prop], text]}
                }
            }   
        }
    }
    return inputErrors
}


export default useValidation