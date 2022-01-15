import { useState } from 'react';
import { useRouter } from 'next/router'
import Modal from './modal'
import MovieCreateForm from './movieCreateForm'
import { createMovie } from '../actions'



const SideMenu = (props) => {
    const { categories } = props
    const router = useRouter()
    let modal = null
 
    const handleCreateMovie = (movie) => {
        createMovie(movie).then((movies) => {          
            // console.log(JSON.stringify(movies))
            modal.closeModal()
            router.push('/')
        })

    }

    return (
        <div>            
            {/* <h4 className="my-4">{props.appName}</h4> */}
            <div className="list-group mt-2">
                { categories.map(c =>
                    <a
                        onClick={() => props.changeCategory(c.name)}
                        key={c.id}
                        href="#"
                        className={`list-group-item ${ props.activeCategory === c.name ? 'active' : '' }`}>{c.name}</a>
                    )
                }                
            </div>
            <Modal ref={ele => modal = ele } hasSubmit={false}>
                <MovieCreateForm handleFormSubmit={handleCreateMovie} />
            </Modal>
            {/* <div>              
                <h1>{props.sideMenuCount}</h1>
            </div> */}
        </div>
    )
}

export default SideMenu