import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDIwNTc1Y2RmNzk2ZDY0ZGVjZDkzMWNiMGQ1YzFjYiIsInN1YiI6IjY0N2UxYmViMGUyOWEyMmJkZmVjYTBkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7df2GsaXU-fSOuXtYv0T9PclSnJXakJkPbK_P4yHQkw";

const headers = {
  Authorization: "Bearer " + TMDB_TOKEN,
};
export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
