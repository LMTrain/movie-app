import React from 'react';
import data from '../server/data.json'

//functional component - arrow function
// WHEN TO USE:
// 1. for smaller components
// 2. reusable components
// 3. presentational components, partially right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hello World'
//     return (
//         <h1>Hello About Page - {message}</h1>
//     )
// }


// const About = () => {
//     const message = 'Hello World'
//     return React.createElement('div', null, 'I am generating this with createElement')
// }


//functional component - normal or traditional function
// function About() {
//     return (
//         <h1>Hello About Page</h1>
//     )
// }


//Class component
class About extends React.Component {
    // state = {
    //     data,
    //     images: []
    // }   

    render() {
        return (
            <div>   
                <div className="home-page">
                    <div className="container">          
                        <div className="row">
                            <div className="col-lg-9">

                                <div id="carouselExampleIndicators" className="carousel slide my-4 ml-1" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                    { data.map((image, index) => (
                                        <li
                                            key={image.id}
                                            data-target="#carouselExampleIndicators"
                                            data-slide-to={index}
                                            className={index === 0 ? "active" : ""}>
                                        </li>
                                        )
                                        )
                                    }             
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        { data.map((image, index) => (
                                                <div key={image.id} className={`carousel-item | ${index === 0 ? 'active' : ""}`}>
                                                    <img                        
                                                        className="d-block img-fluid" 
                                                        src={image.cover} 
                                                        alt={image.name} />
                                                    <p><b>Title:</b> {image.name}</p>
                                                    <p><b>Description:</b> {image.description}</p>
                                                    <p><b>Rating:</b> {image.rating}</p>                                                
                                                </div>                       
                                                )
                                            )
                                        }             
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                    </a>
                                    <style jsx>{`
                                    .carousel-item {
                                        max-height: 750px;
                                        
                                    }
                                    
                                    `}
                                    </style>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            
        )
        
    }
}

export default About