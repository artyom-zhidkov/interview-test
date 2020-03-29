import Vue from 'vue';
import Vuex from 'vuex';
import MovieService from '@/services/MovieService';
import { Movie, MovieDetail } from '@/services/types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: 'Bob Razowski',
      apiToken: '273b9080',
    },
    movies: [] as Movie[],
    MovieDetail: [] as MovieDetail[],
    isShowAlert: false,
    messageForAlert: '',
    totalResults: 20,
    isShowLoadMore: false,
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = [...state.movies, ...payload];
    },
    setMovieDetail(state, payload) {
      state.MovieDetail = payload;
    },
    setTotalResults(state, payload) {
      state.totalResults = payload;
    },
    clearMovies(state) {
      state.movies = [];
    },
    setIsShowAlert(state, payload) {
      state.isShowAlert = payload;
    },
    setIsShowLoadMore(state, payload) {
      state.isShowLoadMore = payload;
    },
    setMessageForAlert(state, payload) {
      state.messageForAlert = payload;
    },
  },
  actions: {
    async getMovieList({ state, commit }, params) {
      try {
        const result = await MovieService.movieService.getMovieList({
          ...params,
          apikey: state.user.apiToken,
        });
        if (result.Response === 'True') {
          commit('setMovies', result.Search);
          commit('setTotalResults', result.totalResults);

          const MOUNT_ITEMS = 10;
          const notAllLoaded = params.page * MOUNT_ITEMS <= state.totalResults;

          commit('setIsShowLoadMore', notAllLoaded);
        } else {
          commit('setIsShowAlert', true);
          commit('setMessageForAlert', result.Error);
        }
      } catch (err) {
        commit('setIsShowAlert', true);
        commit('setMessageForAlert', err);
      }
    },
    async getSpecificMovie({ state, commit }, moveId) {
      try {
        const result = await MovieService.movieService.getSpecificMovie({
          i: moveId,
          apikey: state.user.apiToken,
        });
        if (result.Response === 'True') {
          delete result.Response;
          commit('setMovieDetail', result);
        } else {
          commit('setIsShowAlert', true);
          commit('setMessageForAlert', result.Error);
        }
      } catch (err) {
        commit('setIsShowAlert', true);
        commit('setMessageForAlert', err);
      }
    },
  },
});
