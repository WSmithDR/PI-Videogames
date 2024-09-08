import axios from "axios";
import { appConfig } from "../../../appConfig";
import {
    CREATE_VIDEOGAME,
    GET_DEFAULT_VIDEOGAMES,
    GET_GENRES,
    GET_PLATFORMS,
    RENDER_VIDEOGAMES,
    SEARCH_VIDEOGAME_BY_NAME,
    SET_CURRENT_PAGE,
    SET_START_PAGE_RANGE
} from "./types";

export const getVideogamesByDefault = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(appConfig.vdgEndpoint);
            console.log("Default Videogames Data:", data); // Log de datos
            return dispatch({
                type: GET_DEFAULT_VIDEOGAMES,
                payload: data
            });
        } catch (error) {
            console.error("Error fetching default videogames:", error.message); // Log de error
            return error.message;
        }
    };
};

export const createVideogame = (videogame) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(appConfig.vdgEndpoint, videogame);
            console.log("Created Videogame Data:", data); // Log de datos
            dispatch({
                type: CREATE_VIDEOGAME,
                payload: data
            });
        } catch (error) {
            console.error("Error creating videogame:", error.message); // Log de error
            return error.message;
        }
    };
};

export const getGenres = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(appConfig.genreEnpoint);
            console.log("Genres Data:", data); // Log de datos
            dispatch({
                type: GET_GENRES,
                payload: data
            });
        } catch (error) {
            console.error("Error fetching genres:", error.message); // Log de error
            return error.message;
        }
    };
};

export const getPlatforms = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(appConfig.platformEnpoint);
            console.log("Platforms Data:", data); // Log de datos
            dispatch({
                type: GET_PLATFORMS,
                payload: data
            });
        } catch (error) {
            console.error("Error fetching platforms:", error.message); // Log de error
            return error.message;  
        }
    };
};

export const setCurrentPage = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        payload: page
    };
};

export const renderVideogames = (filter, order) => {
    return {
        type: RENDER_VIDEOGAMES,
        payload: { filter, order }
    };
};

export const searchVideogameByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`${appConfig.vdgEndpoint}?name=${name}`);
            console.log("Searched Videogame Data:", data); // Log de datos
            dispatch({
                type: SEARCH_VIDEOGAME_BY_NAME,
                payload: data
            });
        } catch (error) {
            console.error("Error searching videogame by name:", error.message); // Log de error
            return error.message;
        }
    };
};

export const setStartPageRange = (number) => {
    return {
        type: SET_START_PAGE_RANGE,
        payload: number
    };
};
