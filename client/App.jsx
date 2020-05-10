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
      fetch('https://jsonplaceholder.typicode.com/posts')
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

<<<<<<< HEAD
            < LoginContainer />
        
=======
            {/* < LoginContainer /> */}
              
            < MainContainer />
        
          
>>>>>>> 660dcd7507d5ebc75f0bffc8d57b559472a5bf4e
        </div>
      )}
    }
}

export default App;