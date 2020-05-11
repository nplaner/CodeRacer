import React, { Component, useState, useEffect } from 'react';
import LoginContainer from './container/loginContainer.jsx';
import MainContainer from './container/MainContainer.jsx'

class App extends Component {
    constructor(props) {
        super (props);
        this.state = {
          isLoggedIn: false
        }
    }

    componentDidMount() {
      fetch('/verify', { method: 'POST' })
      .then(res => res.json())
      .then(result => {
        this.setState({
          isLoggedIn: true,
        });
      });
  }
    render() {
      if (this.state.isLoggedIn) {
        return (
          <div className='containers'>
            
            < MainContainer />
      
          </div>
        )
      } else {
        return (
        <div className='containers'>

            < LoginContainer />
        
        </div>
      )}
    }
}

export default App;