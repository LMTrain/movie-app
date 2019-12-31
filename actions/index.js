import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

  const MOVIE_DATA = []

  const CATEGORY_DATA = [
    {ID: 'c-0', name: 'All'},
    {ID: 'c-1', name: 'Action'},
    {ID: 'c-2', name: 'Adventure'},
    {ID: 'c-3', name: 'Crime'},
    {ID: 'c-4', name: 'Drama'},
    {ID: 'c-5', name: 'Fantacy'},
    {ID: 'c-6', name: 'Historical'},
    {ID: 'c-7', name: 'Music'},

  ]

  //1. getCategories function
  //2. get categories in index page
  //3. provide categories to sidemenu
  //4. in sidemenu iterate categories and display them

  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(CATEGORY_DATA)
        // reject('Cannot fetch data!')
      }, 100)
    })
  }

  export const getMovies = () => {
    // return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve(MOVIE_DATA)
    //       // reject('Cannot fetch data!')
    //     }, 100)
    // })
    return axios.get(`${BASE_URL}/api/v1/movies`)
      .then((res) => {
        // console.log(res)
        return res.data
    })
  }

  export const createMovie = (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return axios.post(`${BASE_URL}/api/v1/movies`, movie)
      .then((res) => {
      // console.log(res)
        return res.data
      })
  }

  export const getMovieById = (id) => {
    return axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)   
  }

  export const updateMovie = (movie) => {
    return axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
      .then(res => res.data)   
  }

  export const deleteMovie = (id) => {
    return axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
  }