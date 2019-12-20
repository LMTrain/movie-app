import React from 'react';

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

    renderMovies() {
        const { movieList}  = this.props

        return movieList.map(movie => 
            (
                <div className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100">
                        <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
                        <div className="card-body">
                            <h4 className="card-title">
                                <a href={movie.image}>{movie.name}</a>
                            </h4>                                    
                            <p className="card-text">{movie.description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">{movie.rating}</small>
                            {/* <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small> */}
                        </div>
                    </div>
                </div>               
            )
        )    
    }

    render() {
        
        return (
            <>
                {/* <div> */}
                    {/* <button onClick={() => this.increment()} className="btn btn-primary">Increment Number</button> */}
                    {/* <button onClick={this.increment} className="btn btn-primary">Increment Number</button>
                    <button onClick={this.decrement}className="btn btn-primary">Decrement Number</button> */}
                    {/* <h1>{this.props.movieListCount}</h1> */}
                {/* </div> */}
                {this.renderMovies()}
                
            </>
        )
    }
}

export default MovieList