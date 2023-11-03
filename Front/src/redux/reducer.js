import { CREATE_VIDEOGAME, GET_DEFAULT_VIDEOGAMES, SET_CURRENT_PAGE, SET_ITEMS_PER_PAGE } from "./actions/types"

const initialState = {
    backUpVideogames:[],
    renderedVideogames:[],
    currentPage: 1,
    itemsPerPage: 15
}


const reducer = (state=initialState, {type, payload}) => {
    switch(type){
        case GET_DEFAULT_VIDEOGAMES:
            return {...state, 
            backUpVideogames: payload,
            renderedVideogames: payload
        }

        case CREATE_VIDEOGAME:
            return {...state, 
                backUpVideogames: [...state.backUpVideogames, payload]
        }

        case SET_CURRENT_PAGE:
            return {...state,
                currentPage: payload
        }

        case SET_ITEMS_PER_PAGE:
            return {...state,
                itemsPerPage: payload
        }
        
        default: {
            return {...state}
        }
    }
}


export default reducer