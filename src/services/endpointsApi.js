const APIURL = process.env.REACT_APP_API_THE_MOVIE_DATABASE_URL;
const APIKEY = process.env.REACT_APP_API_THE_MOVIE_DATABASE_KEY;

export const getPopularMoviesURL = () => {
    
    const url = `${APIURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`

    return url;
}


export const getPopularKidsMoviesURL = () =>{
    
    const url = `${APIURL}discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${APIKEY}`

    return url;
}