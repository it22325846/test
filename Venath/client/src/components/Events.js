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
        <h3>Welcome, {username}</h3>
         {/* <style>{'body { background-color: #A2A2A2; }'}</style> */}
         <div className="row">
         <div className="col-4 d-flex justify-content-center align-items-center">
        <a href="/candidates/dancing"><img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" /></a> 
        </div>
        

        <div className="col-4 d-flex justify-content-center align-items-center">
        <a href="/candidates/rap"><img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" /></a> 
          </div>

         <div className="col-4 d-flex justify-content-center align-items-center">
        <a href="/candidates/beatbox"><img src="dance.jpg" className="img-fluid" alt="Models" width="400px" height="400px" /></a> 
          </div>
         </div>

         <div className='row'>

         <div className="col-4 d-flex justify-content-center align-items-center">
  <p><a href="/candidates/dancing">All Candidates In Dancing</a></p><br />
</div>

<div className="col-4 d-flex justify-content-center align-items-center">
  <p><a href="/candidates/rap">All Candidates In Rap</a></p><br />
</div>

<div className="col-4 d-flex justify-content-center align-items-center">
  <p><a href="/candidates/beatbox">All Candidates In BeatBox</a></p>
</div>


         </div>
        
        {/* <h><a href="/candidates/dancing">Dancing</a></h><br></br>
        <h><a href="/candidates/rap">Rap</a></h><br></br>
        <h><a href="/candidates/beatbox">BeatBox</a></h> */}

<br></br>



        <button className="btn btn-success">
          <a href="/signup" style={{ color: 'black' }}>Apply</a>
         
        </button>
{/* 
        <br></br>
        <br></br>
        <button className="btn btn-success" >

          <a href="/add" style={{ color: 'black' }} >Applyyyy</a>
        </button>
        */}
        <br></br>
        <br></br>
        
        <button className="btn btn-success">
          <a href="/candidates" style={{ color: 'black' }}>All Candidates</a>
        </button>

        <br></br>
        <br></br>

        {/* <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add judges</a>
        </button> */}

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
