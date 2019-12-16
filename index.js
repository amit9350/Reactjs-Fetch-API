import ReactDOM from "react-dom";
import React, { useState, useEffect, ReactFragment } from "react";


const App = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://swapi.co/api/planets/4/");
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  return (
   <React.Fragment>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
   </React.Fragment>
  );
};


const Planets = document.getElementById("root");
ReactDOM.render(<App />, Planets);

// render(<Planets/>,document.getElementById('root'));

  //  {items.map(user => (
  //           <div key={user.id}>
  //            <h3> {user.title} </h3>
  //            <p> {user.body} </p>
  //           </div>
  //         ))}