const cleanVideogamesPropsFromApi = (info) => {
        if(Array.isArray(info)){
            return info.map(({
                id,
                name, 
                description, 
                platforms, 
                image,
                releaseDate,
                rating 
            })=>{
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