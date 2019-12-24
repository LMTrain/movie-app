
import { useState } from 'react'



const MovieCreateForm = () => {

    const [form, setForm] = useState({
        name: 'Some Movie',
        description: 'Some Description'
    })

    return (
        <form>
            <div className="form-group">
                <label for="name">Name</label>
                <input
                    value={form.name}
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="emailHelp" 
                    placeholder="Lord of the Rings" />
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <input
                    value={form.description}
                    type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Somewhere in Middle-earth..." />
            </div>
            <div className="form-group">
                <label for="description">Rating</label>
                <input
                    value={form.rating}
                    type="number" 
                    max="5" 
                    min="0" 
                    className="form-control" 
                    id="rating" 
                    placeholder="3" />
                <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
            </div>
            <div className="form-group">
                <label for="image">Image</label>
                <input
                    value={form.image}
                    type="text" 
                    className="form-control" 
                    id="image" 
                    placeholder="http://....." />
            </div>
            <div className="form-group">
                <label for="cover">Cover</label>
                <input
                    value={form.cover}
                    type="text" 
                    className="form-control" 
                    id="cover" 
                    placeholder="http://......" />
            </div>
            <div className="form-group">
                <label for="longDesc">Long Description</label>
                <textarea
                    value={form.longDesc}
                    className="form-control" 
                    id="longDesc" 
                    rows="3"></textarea>
            </div>
            <div className="form-group">
                <label for="genre">Genre</label>
                <select 
                    multiple className="form-control" 
                    id="genre">
                <option>drama</option>
                <option>music</option>
                <option>adventure</option>
                <option>historical</option>
                <option>action</option>
                </select>
            </div>
        </form>
    )
}


export default MovieCreateForm