import { useState } from 'react';
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'


//Containment
// const stateArray = useState(0)
//const count = stateArray[0]
// const setCount = stateArray[1]

// const increment = () => {
//     const newCount = count + 1
//     setCount(newCount)
//     // console.log("THIS IS COUNT", count)
//     // console.log("THIS IS setCOUNT", setCount)
// }

// const decrement = () => {
//     const newCount = count - 1
//     setCount(newCount)
// }
const SideMenu = (props) => {
    const { categories } = props
    let modal = null
 
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {          
            console.log(JSON.stringify(movies))
            modal.closeModal()
        })

    }

    return (
        <div>
            <Modal ref={ele => modal = ele } hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map(c =>
                    <a 
                        key={c.id}
                        href="#"
                        className="list-group-item">{c.name}</a>
                    )
                }                
            </div>
            {/* <div>              
                <h1>{props.sideMenuCount}</h1>
            </div> */}
        </div>
    )
}

export default SideMenu