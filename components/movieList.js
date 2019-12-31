import React from 'react';
import Link from 'next/link'

class MovieList extends React.Component {

    // state = {
    //     count: 0
    // }

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    //     // this.increment = this.increment.bind(this)
    // }

    // increment = () => {
    //     // const count = this.state.count
    //     const { count } = this.state

    //     //VERY BAD
    //     //this.state.count = count + 1
    //     this.setState({
    //         count: count + 1
    //     })
    // }

    // decrement = () => {
    //     const { count } = this.state       
    //     this.setState({
    //         count: count - 1
    //     })
    // }

    
    shortenDescription = (text) => {
        if (text && text.length > 200) {
            return text.substr(0, 200) + '...'
        }
        return text
    }

    renderMovies() {
        const { movieList}  = this.props

        return movieList.map(movie => 
            (
                <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <Link href="/movies/[id]" as={`/movies/${movie.id}`}> 
                            <a><img className="card-img-top" src={movie.image} alt="" /></a>
                        </Link>
                        <div className="card-body">
                            <h4 className="card-title">
                                <Link href="/movies/[id]" as={`/movies/${movie.id}`}>
                                    <a>{movie.name}</a>
                                </Link>
                            </h4>
                            <div className="movie-genre">{movie.genre}</div>                                  
                            <p className="card-text">{this.shortenDescription(movie.description)}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                            {/* <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small> */}
                        </div>
                    </div>
                    <style jsx>{`
                    .card-img-top {
                        max-height: 120px;
                    }
                    
                    `}
                </style>   
                </div>               
            )
        )    
    }

    render() {
        const { movies } = this.props
        
        return (
            <>
                {/* <div> */}
                    {/* <button onClick={() => this.increment()} className="btn btn-primary">Increment Number</button> */}
                    {/* <button onClick={this.increment} className="btn btn-primary">Increment Number</button>
                    <button onClick={this.decrement}className="btn btn-primary">Decrement Number</button> */}
                    {/* <h1>{this.props.movieListCount}</h1> */}
                {/* </div> */}
                {this.renderMovies(movies)}
                
            </>
        )
    }
}

export default MovieList