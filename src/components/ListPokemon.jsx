import '../App.css';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
// import { useEffect } from 'react';

function ListPokemon() {
    const [data, setData] = useState({results: []});
    // let [page, setPage] = useState(1);
    // const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(res => res.json())
        .then(setData)
        .catch(function (error) {
            console.log(error);
          })
        // .then (console.log(data.results[0]))
        }, [])
    
    // function nextPage (nPage) {
    //   setPage(nPage+1)
      
    // }

  return (
    <div className='listPokemon'>
      <h1>Lista Pokemon</h1>
        <ul >{data.results.map(item => (
            <li key={item.name}> 
                <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
            </li>
      ))}</ul>
      <div className='buttonListPokemon'>
        <button> Indietro </button> <span></span> <button> Avanti </button>
      </div>
    </div>
  );
}

export default ListPokemon;
