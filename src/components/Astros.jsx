/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './Astros.css';
import CircularIndeterminate from './Progress';

const DATA_URL = 'http://api.open-notify.org/astros.json';

const Astro = ({ name, station }) => {
  return (
    <div className="astro--container">
      <h2 className="astro--name">{name}</h2>
      <p className="astro--station">{station}</p>
    </div>
  );
};

export const Astros = () => {
  const [astros, setAstros] = useState([]);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    setAstros(json.people);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {astros.length == 0 ? (
        <CircularIndeterminate />
      ) : (
        <div className="astros--view">
          {astros.map((p, i) => (
            <Astro key={i} name={p.name} station={p.craft} />
          ))}
        </div>
      )}
    </>
  );
};
