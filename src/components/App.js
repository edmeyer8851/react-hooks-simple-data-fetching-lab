// create your App component here
import React, { useEffect, useState } from "react"

const App = () => {
    
    const [image, setImage] = useState("")

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(dogImage => setImage(dogImage.message))
    }, [])
    
    return (
        <>
            {image === "" ? <p>Loading...</p> : <img src={image} alt="A Random Dog"></img>}
        </>
    )
}

export default App