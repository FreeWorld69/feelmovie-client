const axios = require('axios');
require('dotenv').config()

const SOURCE = process.env['NG_APP_MOVIE_API_SOURCE_PARAM'];
const PER_PAGE = 20;
const TYPE = 'movie';
const PERIOD = 'month';
const API = axios.default.create({
  baseURL: process.env['NG_APP_MOVIE_API_URL'],
  headers: {
    "accept": "application/json",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,ka;q=0.7",
    "x-source": "adjaranet",
    'content-type': 'application/json',
    Accept: 'application/json',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36',
    origin: 'https://api.adjaranet.com',
    referer: 'https://api.adjaranet.com'
  }
})


async function getMovies() {
  return API.get('/movies', {
    params: {
      'page': 1,
      'per_page': PER_PAGE,
      'sort': '-upload_date',
      'source': SOURCE,
      'filters[init]': true,
      'filters[sort]': '-upload_date',
      'filters[with_files]': 'yes',
      'filters[with_actors]': 3,
      'filters[with_directors]': 1,
      'filters[type]': undefined,
      'filters[genre]': undefined,
      'filters[language]': undefined,
      'filters[year_range]': undefined,
      'filters[imdb_rating_range]': undefined
    }
  }).then(e => e.data).catch(() => null)
}

async function getTopMovies() {
  return API.get('/movies/top', {
    params: {
      'page': 1,
      'per_page': PER_PAGE,
      'type': TYPE,
      'source': SOURCE,
      'period': PERIOD,
      'filters[with_actors]': 3,
      'filters[with_directors]': 1,
    }
  }).then(e => e.data).catch(() => null)
}


async function getPopularMovies() {
  return API.get('/movies/featured', {
    params: {
      'source': SOURCE,
    }
  }).then(e => e.data).catch(() => null)
}

async function getGeneralDetails(movieDetailsId) {
  return API.get(`/movies/${movieDetailsId}`, {
    params: {
      movieDetailsId,
      'source': SOURCE,
      'filters[with_directors]': 1
    }
  }).then(e => e.data).catch(() => null)
}

async function getFoundMovie(text) {
  return API.get(`/search`, {
    params: {
      'page': 1,
      'per_page': 10,
      'source': SOURCE,
      'keywords': text,
      'filters[type]': undefined,
      'movie_filters[keyword]': undefined,
      'movie_filters[init]': undefined,
      'movie_filters[with_actors]': undefined,
      'movie_filters[with_directors]': undefined,
    }
  }).then(e => e.data).catch(() => null)
}


async function getMovie(id) {
  return API.get(`/movies/${id}/season-files/${0}`, {
    params: {
      'source': SOURCE,
    }
  }).then(e => {
    const data = e.data;

    if (!data || (Array.isArray(data) && !data.length)) {
      return {};
    }

    return data;
  })
    .catch(() => {
      return {}
    })
}

async function getSeries(id, season) {
  return API.get(`/movies/${id}/season-files/${season}`, {
    params: {
      'source': SOURCE,
    }
  }).then(e => e.data).catch(() => null)
}

module.exports = {
  getMovies,
  getTopMovies,
  getPopularMovies,
  getGeneralDetails,
  getFoundMovie,
  getMovie,
  getSeries
}
