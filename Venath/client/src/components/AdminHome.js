import React, { useEffect } from 'react';

const AdminHome = () => {
  // useEffect(() => {
  //   const admin = localStorage.getItem('username');
  //   if (admin !== 'admin') {
  //     alert("You are not admin");
  //     window.location.href = '/home';
  //   }
  // }, []);

  const handleSignOut = () => {
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  return (
    <div>
      <style>{'body { background-color: #A2A2A2; }'}</style>
      <h><a href="/admincandidates/dancing">Dancijjjjng</a></h><br></br>
      <h><a href="/admincandidates/rap">Rap</a></h><br></br>
      <h><a href="/admincandidates/beatbox">BeatBox</a></h>

      {/* ... other buttons ... */}

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/editcandidates" style={{ color: 'black' }}>All Candidates</a>
      </button>

    

      

        
      <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add Judges</a>
        </button>

        <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add Event</a>
        </button>

        
      <br></br>
      <br></br>

      <button className="btn btn-success">
          <a href="#" style={{ color: 'black' }}>Add Stalls</a>
        </button>

      <br></br>
      <br></br>

      <button className="btn btn-success">
        <a href="/Adminsignup" style={{ color: 'black' }}>Sign up</a>
      </button>

      <br></br>
      <br></br>

      <div>
        <button className="btn btn-danger" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default AdminHome;
