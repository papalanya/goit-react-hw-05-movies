import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'd9be4e551e37d83d39e4bc9c1141906d';

//trending movies request

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${KEY}`);
  return data.results;
};

//movie details request

export const getMovieById = async movieId => {
  const res = await axios
    .get(`/movie/${movieId}?api_key=${KEY}`)
    .catch(error => {
      throw new Error('Oops... seems like an error occured.');
    });
  return res.data;
};

//cast info request

export const getCredits = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );

  return data.cast;
};

//reviews request

export const getReviews = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}`);
  return data.results;
};

//search movies request

export const getMoviesByName = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};
