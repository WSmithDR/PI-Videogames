import axios from "axios"
import { CREATE_VIDEOGAME, GET_DEFAULT_VIDEOGAMES, RENDER_VIDEOGAMES, SEARCH_VIDEOGAME_BY_NAME, SET_CURRENT_PAGE, SET_ITEMS_PER_PAGE } from "./types"

const vdgEndpoint = `http://localhost:3001/videogames`

export const getVideogamesByDefault = () => {
    return async (dispatch) => {
        try {
            const {data} = await axios(vdgEndpoint)
            return dispatch(
                {
                    type: GET_DEFAULT_VIDEOGAMES,
                    payload: data
                }
            )
        } catch (error) {
            return error.message
        }
    }
} 

export const createVideogame = (videogame) => {
    return async (dispatch) => {
        try {
            const {data} = await axios.post(vdgEndpoint, videogame)
            dispatch(
                {
                    type: CREATE_VIDEOGAME,
                    payload: data
                }
            )
        } catch (error) {
            
            return error.message
        }
    }
}


export const setCurrentPage = page => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    }
}


export const setItemsPerPage = itemsPerPage => {
    return {
        type: SET_ITEMS_PER_PAGE,
        payload: itemsPerPage
    }
}


export const renderVideogames = (filter, order) => {
    return {
        type: RENDER_VIDEOGAMES,
        payload: {filter, order}
    }
}


export const searchVideogameByName = name => {
   try {
        return async dispatch => {
            const {data} = await axios(`${vdgEndpoint}?name=${name}`)
            dispatch({
                type: SEARCH_VIDEOGAME_BY_NAME,
                payload: data
            })
        }
   } catch (error) {
        return error.message
   }
}