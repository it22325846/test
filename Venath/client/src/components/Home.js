import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <div style={{ position: 'relative' }}>
          <img
            src="wall.jpg"
            className="img-fluid"
            alt="Wall"
            style={{ zIndex: 1 }}
          />
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ zIndex: 1 }}>
            {/* <h1>The 2024 </h1> */}
          </div>
        </div>
        </div>

        <div className="row">
          <img src="models.jpg" className="img-fluid" alt="Models"/>
          <div className="position-absolute top-50 start-50 translate-middle text-center text-white" style={{ zIndex: 1 }}>
            <div className="col-xl-12">
              <h1 className="text-center">The 2024</h1>
            </div>
            {/* <div className="col-xl-12">
              <h1 >BORN TO BATTLE CHAMPIONSHIP</h1>
            </div> */}
          </div>
        </div>

         <div className="row">
        
         
            <div className="col-xl-12">
            <p className="lead text-center " style={{ fontSize: '30px' }}>
                It’s the world’s most celebrated dance event. 
                Over three thousand of the world’s best dancers will come together for the World Hip Hop Dance Championship, 
                an event true to the real values of hip hop culture. Crews from 55+ countries will compete to capture the world title and international bragging rights while hip hop icons, 
                and celebrities make appearances and perform.
                </p>
              <h1 className="text-center">BORN TO BATTLE CHAMPIONSHIP</h1>
            </div>
           
        
        </div>

        <div className="row">

        <div className="col-4 d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-danger btn-lg">How to Enter</button>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-danger btn-lg">How to Enter</button>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
        <button type="button" class="btn btn-danger btn-lg">How to Enter</button>
        </div>
       
        </div>
      

        <div className="row">
            <br></br>
        </div>

      </div>

    );
  }
}
