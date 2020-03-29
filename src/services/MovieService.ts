import axios, { AxiosInstance } from 'axios';

class MovieService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'http://www.omdbapi.com/',
    });
  }

  public async getMovieList(params: { s: string; apikey: string; page: number; type: string}) {
    try {
      const result = await this.axiosInstance.get('/', {
        params: {
          ...params,
        },
      });
      return result.data;
    } catch (err) {
      return err;
    }
  }

  public async getSpecificMovie(params: { i: string; apikey: string }) {
    try {
      const result = await this.axiosInstance.get('/', {
        params: {
          ...params,
        },
      });

      return result.data;
    } catch (err) {
      return err;
    }
  }
}

const movieService = new MovieService();

export default {
  movieService,
};
