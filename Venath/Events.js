import React, { Component } from 'react'

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: localStorage.getItem('username') || '', // Retrieve username from localStorage
    };
  }
  handleSignOut = () => {
    localStorage.removeItem('username'); 
    this.setState({ username: '' }); 
  };

  render() {
    const { username } = this.state;
    return (
      
      <div>
        <p>Welcome, {username}</p>
         <style>{'body { background-color: #A2A2A2; }'}</style>
        <h><a href="/candidates/dancing">Dancing</a></h><br></br>
        <h><a href="/candidates/rap">Rap</a></h><br></br>
        <h><a href="/candidates/beatbox">BeatBox</a></h>

<br></br>



        <button className="btn btn-success">
          <a href="/signup" style={{ color: 'black' }}>Apply</a>
         
        </button>

        <br></br>
        <br></br>
        <button className="btn btn-success" >

          <a href="/add" style={{ color: 'black' }} >Applyyyy</a>
        </button>
       
        <br></br>
        <br></br>
        
        <button className="btn btn-success">
          <a href="/candidates" style={{ color: 'black' }}>All Candidates</a>
        </button>

        <br></br>
        <br></br>

        <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add judges</a>
        </button>

        <br></br>
        <br></br>

        <button className="btn btn-success">
          <a href="/signup" style={{ color: 'black' }}>Sign up</a>
        </button>
         
         <br></br>
         <br></br>
        <div>
            
            <button className="btn btn-danger" onClick={this.handleSignOut}>
              Sign Out
            </button>
          </div>

          <br></br>
        <br></br>

        <button className="btn btn-success">
          <a href="/signin" style={{ color: 'black' }}>Sign In</a>
        </button>

          

      </div>
      
    )
  }
}
