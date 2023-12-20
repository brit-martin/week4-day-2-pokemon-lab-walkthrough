import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card.jsx'
import './App.css'



function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [limit, setLimit] = useState('2')
  const [type, setType] = useState('electric')

useEffect(() => {
  doApiCall()
}, [])


function handleLimitChange(event){
setLimit(event.target.value)
}


function handleTypeChange(event){
  setType(event.target.value)
}

function formSubmitListener(event){
  event.preventDefault()

 doApiCall()
}

function doApiCall(){
  axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  .then((response) => {
   
    
  let uglyPokemonObjectArray = response.data.pokemon
  let prettyPokemonStringArray = uglyPokemonObjectArray.map((pokeObj) => pokeObj.pokemon.name)

  if(+limit > 0 ){
    let newPokemonArray = prettyPokemonStringArray.slice(0, +limit)
    setPokemonList(newPokemonArray)
  } else {
    setPokemonList([])
  }

  })
  .catch((error) => {
    console.log(error)
  })
}


  return (
    <div>
     <h1>Here are some Pokemon!</h1>
     <form onSubmit={formSubmitListener}>
      <label htmlFor="limit-input">Limit: </label>
      <input id="limit-input" value= {limit} onChange={handleLimitChange}/>
      <label htmlFor="type-input">Type: </label>
      <input id="type-input" value= {type} onChange={handleTypeChange}/>
      <button>Submit</button>
    </form>

      {
        pokemonList.map((element, index, array) => {
          return <Card pokemon={element}/>
        })
      }
     
    </div>
  )
}

export default App
