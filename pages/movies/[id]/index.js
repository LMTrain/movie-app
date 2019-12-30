
import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'


const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props

    const handleDeleteMovie = (id) => {
        deleteMovie(id).then(() => {
            //Handle "then" later
            router.push('/')
        })
    }
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{movie.name}</h1>
                    <p className="lead">{ movie.description }</p>
                <hr className="my-4" />
                    <p>{ movie.genre }</p>
                <button className="btn btn-primary btn-lg mr-2" href="#" role="button">Learn more</button>
                <button onClick={() => handleDeleteMovie(id)} className="btn btn-danger btn-lg ml-1" href="#" role="button">Delete</button>
            </div>
            <p>{ movie.longDesc} </p>
        </div>
    )
}

Movie.getInitialProps = async ({ query }) => { 
    const movie = await getMovieById(query.id)

    return { movie }
}

export default Movie