
import React from 'react'
import Router from 'next/router'
import MovieCreateForm from '../../../components/movieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'



class EditMovie extends React.Component {

    static async getInitialProps({query}) {
        const movie = await getMovieById(query.id)
        return {movie}
    }

    handleUpdateMovie = (movie) => {
        updateMovie(movie).then((updatedMovie) => {       
            Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
    }

    // state = {
    //     movie: {
    //         name: '',
    //         description: '',
    //         rating: '',
    //         image: '',
    //         cover: '',
    //         longDesc: ''
    //     }
    // }

    // componentDidMount() {
    //     const { id } = this.props.query
    //     getMovieById(id).then(movie => {
    //         this.setState({movie})
    //         console.log({movie})
    //     })
    // }

    render() {
        const { movie } = this.props
        return (
            <div className="container">
                <h1>Edit the Movie</h1>
                {/* { JSON.stringify(movie)}                 */}
                <MovieCreateForm
                    submitButton="Update"
                    cancelButton="Cancel"
                    initialData={movie}
                    handleFormSubmit={this.handleUpdateMovie} />
            </div>
        )
    }
}

export default EditMovie