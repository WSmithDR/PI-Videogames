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
                Genres,
                genres 
            })=>{
                return {
                    id,
                    name,
                    created: false, 
                    description:description_raw, 
                    platforms: platforms.map(object => object.platform),
                    image: background_image,
                    releaseDate: released,
                    rating,
                    genres: Genres || genres
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
                Genres,
                genres
            } = info
            return {
                id,
                name,
                created: false, 
                description: description_raw, 
                platforms: platforms.map(object => object.platform),
                image: background_image,
                releaseDate: released,
                rating,
                genres: Genres || genres
            }
        }
}

module.exports = {
    cleanVideogamesPropsFromApi
}