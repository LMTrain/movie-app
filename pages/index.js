import React, { useState, useEffect } from 'react';
import SideMenu from '../components/sideMenu';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions/index';


const Home = (props) => {

  const { images, categories, movies } = props
  const [ filter, setFilter ] = useState('All')

  const changeCategory = category => {
    // alert(`Changing to category of: ${category}`)
    setFilter(category)
  }

  const filterMovies = movies => {
    if (filter === 'All') {
      return movies
    }

    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter)
    })
  }

  return (
    <div>   
      <div className="home-page">
        <div className="container">          
          <div className="row">
            <div className="col-lg-3">
              <SideMenu
                changeCategory={changeCategory}
                activeCategory={filter}
                categories={categories}
                appName={"Movie DB"}
                // clickHandler={() => {console.log("Hello World")}}
                // sideMenuCount={count}
              />
            </div>

            <div className="col-lg-9">
              <Carousel images={images} />
              <h4>{filter} Movies</h4>
              <div className="row">
                <MovieList 
                  // movieListCount={count}
                  movieList={filterMovies(movies) || []}
                />           
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  )
}


Home.getInitialProps = async () => {
  const movies = await getMovies() // array of movies
  const categories = await getCategories()
  const images = movies.map((movie) => {
    return {
      id: `image-${movie.id}`,
      url: movie.cover,
      name: movie.name

    }
})
    return {
      movies,
      images,
      categories
    }
}





export default Home
