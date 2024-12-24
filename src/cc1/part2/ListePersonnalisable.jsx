import {useState} from "react";

export default function ListePersonnalisable ({elements}){
    const [color,setColor]=useState('black')
    const [type,setType]=useState('disc')
    const colors = [
        'red','green','blue','yellow','black'
    ]
    const types = [
        'square','disc','georgian','decimal','lower-alpha'
    ]
    const handleColorChange = (e) => {
        setColor(colors[Math.floor(Math.random()*colors.length)])
    }
    const handleTypeChange = (e) => {
        setType(types[Math.floor(Math.random()*types.length)])
    }
    const showElements = elements.map((element,index) => <li key={index}>{element}</li>)
    return (
        <>
            <ul style={{color:color ,listStyleType: type}}>
                {showElements}
            </ul>
            <button onClick={handleColorChange}>Change Color</button>
            <button onClick={handleTypeChange}>Change Type</button>
        </>

    )
}