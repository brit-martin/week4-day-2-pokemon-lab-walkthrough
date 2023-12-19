import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'
//we are pretending this is date we got from an API
const theList = ['pikachu', 'raichu', 'voltorb']


function App() {

  const [pokemonList, setPokemonList] = useState(theList)

  return (
    <div>
     <h1>Here are some Pokemon!</h1>
      {
        pokemonList.map((element, index, array) => {
          return <Card pokemon={element}/>
        })
      }
    </div>
  )
}

export default App
