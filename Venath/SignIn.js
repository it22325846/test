import React, { useState } from 'react';
import axios from 'axios';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    try {
      if(username=="admin" && password=="admin"){
        window.location.href = '/admin';
      }
      // Sign-in logic (replace with your actual sign-in logic)
      const response = await axios.post('api/signin', { username, password });

      if (response.data.success) {
        // Sign-in successful
        localStorage.setItem('username', username); // Store username in session
        window.location.href = '/profile'; // Redirect to dashboard or another page
      } else {
        setError('Invalid username or password. Please try again.');
      }
    } catch (error) {
      setError('Error in sign-in. Please try again.');
      console.error("Error in sign-in:", error);
    }
   
  };

  return (
    <div  className="container d-flex justify-content-center align-items-center vh-100">
       <div style={{ maxWidth: '500px', maxHeight: '700px', width: '100%', overflow: 'auto', }}>
<div className="card p-4">
      <h2 className="text-center mb-4">Sign In Page</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="button" className="btn btn-primary" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
