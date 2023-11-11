import axios from "axios"
import { CREATE_VIDEOGAME, GET_DEFAULT_VIDEOGAMES, GET_GENRES, GET_PLATFORMS, RENDER_VIDEOGAMES, SEARCH_VIDEOGAME_BY_NAME, SET_CURRENT_PAGE, SET_START_PAGE_RANGE } from "./types"

const vdgEndpoint = `http://localhost:3001/videogames`

const genreEnpoint = "http://localhost:3001/genres"

const platformEnpoint = "http://localhost:3001/platforms"

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

export const getGenres = () => {
    return async dispatch =>{
        try {
            const {data} = await axios(`${genreEnpoint}`)
            dispatch( {
                type: GET_GENRES,
                payload: data
            })
        } catch (error) {
            return error.message
        }
    }
}

export const getPlatforms = () => {
    return async dispatch => {
        try {
            const {data} = await axios(`${platformEnpoint}`)
            dispatch( {
                type: GET_PLATFORMS,
                payload: data
            })
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

export const setStartPageRange = (number) => {
    return {
        type: SET_START_PAGE_RANGE,
        payload: number
    }
}