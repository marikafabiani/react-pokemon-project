import '../App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import { useEffect } from 'react';

function Pokemon() {
    const { name } = useParams();
    const [data, setData] = useState({results: []});
    const [isLoaded, setIsLoaded] = useState(false);
    const [showMoves, setShowMoves] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(res => res.json())
        .then(function(json) {
          setIsLoaded(true);
          setData(json);
          // console.log(json)
        })
        .catch(function (error) {
            console.log(error);
          })
        // .then (console.log(data.results[0]))
        }, [name])
    
    if (isLoaded === false) {
      return (
        <h1>Caricamento in corso</h1>
      )
    }

    const handleShowMoves = () => {
      setShowMoves(prevState => !prevState)
    }

  return (
    <div className="containerPokemon">
      <h1>{data.name}</h1>
      <img className="imagePokemon" src={data.sprites.front_default} alt="" />
      {data.types.map(item => <h3 className="typePokemon">{item.type.name}</h3>)}
      <button className='showMovesPokemon' onClick={handleShowMoves}> Mostra mosse </button>
      { showMoves 
      ? <ul className='movesPokemon'>
        {data.moves.map(item => <li>{item.move.name}</li>)}
      </ul>
      : null }
    </div>
    
  );
}

export default Pokemon;