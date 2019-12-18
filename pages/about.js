import React from 'react';

//functional component - arrow function
const About = () => {
    const message = 'Hello World'
    return (
        <h1>Hello About Page - {message}</h1>
    )
}
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
export default About