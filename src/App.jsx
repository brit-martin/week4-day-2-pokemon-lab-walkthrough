import { useState } from 'react'
import axios from 'axios'
import Card from './Card.jsx'
import './App.css'
//we are pretending this is date we got from an API
const theList = ['pikachu', 'raichu', 'voltorb']


function App() {

  const [pokemonList, setPokemonList] = useState(theList)
  const [limit, setLimit] = useState('2')
  const [type, setType] = useState('electric')


function handleClick(){
  setPokemonList([...pokemonList, 'Mewtwo'])
}

function handleLimitChange(event){
setLimit(event.target.value)
}


function handleTypeChange(event){
  setType(event.target.value)
}

function formSubmitListener(event){
  event.preventDefault()


  axios.get(`https://pokeapi.co/api/v2/type/${type}`)
  .then((response) => {
   
    
  let uglyPokemonObjectArray = response.data.pokemon
  let prettyPokemonStringArray = uglyPokemonObjectArray.map((pokeObj) => pokeObj.pokemon.name)

  if(+limit > 0 ){
    let newPokemonArray = prettyPokemonStringArray.slice(0, +limit)
    console.log(newPokemonArray)
  } else {
    console.log([])
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
      <input></input>
      <button onClick={handleClick}>Add pokemon</button>
    </div>
  )
}

export default App
