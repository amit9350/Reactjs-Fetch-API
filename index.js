import React, {component,useState, useEffect } from "react";

const  App = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  async function fetchData() {
    const res = await fetch("https://swapi.co/api/planets/4/");
    res
      .json()
      .then(res => setPlanets(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};

render(<App />, document.getElementById('root'));

  //  {items.map(user => (
  //           <div key={user.id}>
  //            <h3> {user.title} </h3>
  //            <p> {user.body} </p>
  //           </div>
  //         ))}