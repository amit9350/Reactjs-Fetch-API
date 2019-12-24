import React, { Component } from 'react';
import { render } from 'react-dom';

import {Link,Switch,Router } from 'react-router-dom';
import Login from './Login';
import Header from './Logout';
import './style.css';

class App extends React.Component {
render() {    
return (
<div className="container">
<Switch>
<Router exact path="/" compnent={Login} />
</Switch>
</div>
);

}
}

render(<App />, document.getElementById('root'));

