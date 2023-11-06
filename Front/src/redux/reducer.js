import { CREATE_VIDEOGAME, GET_DEFAULT_VIDEOGAMES, RENDER_VIDEOGAMES, SEARCH_VIDEOGAME_BY_NAME, SET_CURRENT_PAGE, SET_ITEMS_PER_PAGE } from "./actions/types"

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

        case RENDER_VIDEOGAMES: 
        const {filter, order} = payload
            let filtered = [...state.backUpVideogames].filter(
                videogame => {
                    return( 
                        (filter.genre==="all"
                        ? true
                        : videogame.genres?.some(genre=>genre.name===filter.genre)
                        )&&(filter.created==="all"
                        ? true
                        : filter.created==="true"? videogame.created:!videogame.created
                        )
                    )
                }
            )
            const sortVideogames = (a,b) => {
                const {prop, way} = order
                if(prop==="rating"){
                    if(way==="A"){
                        return(
                            a.rating - b.rating)
                    }
                    if(way==="D"){
                        return(
                            b.rating - a.rating)
                    }
                }
                if(prop==="name"){
                    if(way==="A"){
                        return( 
                            a.name.localeCompare(b.name)
                        )
                    }
                    if(way==="D"){
                        return( 
                            b.name.localeCompare(a.name)
                        )
                    }
                }
            }
            return {...state, renderedVideogames:[...filtered]?.sort((a,b)=>sortVideogames(a,b)) 
            }

        case SEARCH_VIDEOGAME_BY_NAME: 
                return {
                    ...state,
                    renderedVideogames: [...payload],
                    backUpVideogames: [...payload]
                }
        
        default: {
            return {...state}
        }
    }
}


export default reducer