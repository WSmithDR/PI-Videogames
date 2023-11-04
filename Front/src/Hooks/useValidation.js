const wordDescriptionCount = 10

const useValidation = (state) =>{
    let inputErrors = {}
    for(let prop in state){
        const content = state[prop]
        let text = ""
        let errors = []
        if(typeof content === "string"){
            if(content.length===0){
                text = `${prop} cannot be empty.`
                errors = [...errors, text]
            }
            if(prop==="description"){
                const amountWords = content.split(" ").length
                if(amountWords < wordDescriptionCount){
                    text = `${prop} must have at least ${wordDescriptionCount} words.`
                    errors = [...errors, text]
                }
            }

            if(prop === "releaseDate"){
                if(content.length===0){
                    text = `You have to choose the ${prop} for the videogame.`
                    errors = [...errors, text]
                }
            }

            if(prop === "image"){
                if (!content.includes("data:image/jpeg;base64,")){
                    text = `You have to upload an image for the videogame.`
                    errors = [...errors, text]
                }
            }
        }
        if(Array.isArray(content)){
            if(content.length===0){
                text = `For ${prop}, you must choose at least one option.`
                errors = [...errors, text]
            }
        }
        console.log("***",content)
        if(typeof content === "number"){
            console.log("bool", content === 0)
            if(content===0){
                text = `${prop} cannot be ${content}. Put at least one star.`
                errors = [...errors, text]
            }
        }
        inputErrors = {...inputErrors, [prop]:[...errors]}   
    }
    return inputErrors
}


export default useValidation