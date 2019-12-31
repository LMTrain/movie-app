
import axios from 'axios'


export default async(reg, res) => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    const posts = response.data
    return res.json(posts.slice(0, 20))
   
    // return res.json(response.data)
  

}