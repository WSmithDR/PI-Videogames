const cleanVideogamesPropsFromApi = (info) => {
        if(Array.isArray(info)){
            return info.map(({
                id,
                name, 
                description_raw, 
                platforms, 
                background_image,
                released,
                rating,
                genres 
            })=>{
                //const strsPlatforms = platforms.map(({platform})=>platform.name)
                return {
                    id,
                    name,
                    created: false, 
                    description:description_raw, 
                    platforms,
                    image: background_image,
                    releaseDate: released,
                    rating,
                    Genres: genres
                }
            })
        }else{
            const {
                id,
                name, 
                description_raw, 
                platforms, 
                background_image,
                released,
                rating,
                genres
            } = info

            //const strsPlatforms = platforms.map(({platform})=>platform.name)
            return {
                id,
                name,
                created: false, 
                description: description_raw, 
                platforms,
                image: background_image,
                releaseDate: released,
                rating,
                Gneres:genres
            }
        }
}

module.exports = {
    cleanVideogamesPropsFromApi
}