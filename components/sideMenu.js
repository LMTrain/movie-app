// import { useState } from 'react';


const SideMenu = (props) => {
    const { categories } = props
    
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

    return (
        <div>
            <h1 className="my-4">{props.appName}</h1>
            <div className="list-group">
                { categories.map(c =>
                    <a 
                        key={c.id}
                        href="#"
                        className="list-group-item">{c.name}
                    </a>
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