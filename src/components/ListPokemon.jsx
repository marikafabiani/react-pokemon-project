import "../App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from 'react';

function ListPokemon() {
  const [data, setData] = useState({ results: [] });
  const [offset, setOffset] = useState(0);
  // let [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}`)
      .then((res) => res.json())
      .then(setData)
      .catch(function (error) {
        console.log(error);
      });
  }, [offset]);

  const nextPage = () => {
    setOffset((prevNumber) => prevNumber + 20);
  };

  const prevPage = () => {
    setOffset((prevNumber) => prevNumber - 20);
  };

  return (
    <div className="listPokemon">
      <h1>Lista Pokemon</h1>
      <ul>
        {data.results.map((item) => (
          <li key={item.name}>
            <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div className="buttonListPokemon">
        <button disabled={offset === 0} onClick={() => prevPage()}>
          Indietro
        </button>
        <span> Pagina: {offset / 20 + 1} </span>
        <button onClick={() => nextPage()}> Avanti </button>
      </div>
    </div>
  );
}

export default ListPokemon;
