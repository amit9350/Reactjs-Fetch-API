import React, { Component } from 'react';

import { render } from 'react-dom';
import Hello from './Hello';
import Header from './Header';
import './style.css';
 class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
       
  }

  componentDidMount() {
    fetch("https://digit-api.digit.in/v1/article/41688?lang=en")
      .then(res => res.json())
      .then(
       
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
            
          });
        
         },
        
         
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      
    
  }

  render() {
    const { error, isLoaded, items } = this.state;
   // console.log(items);
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
     
      return (
  <div className="container">
  <Header/>
  <Hello name={items}  />
  </div>
      );
    }
  }
}

render(<App />, document.getElementById('root'));

  //  {items.map(user => (
  //           <div key={user.id}>
  //            <h3> {user.title} </h3>
  //            <p> {user.body} </p>
  //           </div>
  //         ))}