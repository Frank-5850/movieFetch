import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = "http://www.omdbapi.com/";

export const getMoviesByName = async (search) => {
  const url = `${baseUrl}?apikey=${apiKey}&s=${search}`;
  try {
    const result = await axios.get(url);
    console.log(result.data.Search);
  } catch (error) {
    console.log(error);
  }
  return [];
};

export const getMovieDetailsById = async (id) => {
  const url = `${baseUrl}?apikey=${apiKey}&i=${id}`;
  try {
    const result = await axios.get(url);
    console.log(result.data);
  } catch (error) {
    console.log(error);
  }
};
