const key = 'e8211a812aaf96a86edf0e799c3c8e37'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&append_to_response=videos&language=en-US`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&append_to_response=videos&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&append_to_response=videos&language=en-US&page=3`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&append_to_response=videos&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&append_to_response=videos&language=en-US&page=2`,
}

export default requests