const cleanVideogamesPropsFromApi = (info) => {
        if(Array.isArray(info)){
            return info.map(({
                id,
                name, 
                description, 
                platforms, 
                background_image,
                released,
                rating,
                genres 
            })=>{
                const strsPlatforms = platforms.map(({platform})=>platform.name)
                return {
                    id,
                    name,
                    created: false, 
                    description, 
                    platforms:strsPlatforms, 
                    image: background_image,
                    releaseDate: released,
                    rating,
                    genres
                }
            })
        }else{
            const {
                id,
                name, 
                description, 
                platforms, 
                image,
                releaseDate,
                rating
            } = info

            return {
                id,
                name,
                created: false, 
                description, 
                platforms, 
                image,
                releaseDate,
                rating
            }
        }
}

module.exports = {
    cleanVideogamesPropsFromApi
}