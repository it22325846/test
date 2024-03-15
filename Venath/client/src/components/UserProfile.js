import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const UserProfile = () => {
  const [candidate, setCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const { userName, id } = useParams();
  const username = localStorage.getItem('username') || '';
  
  useEffect(() => {
    const existingUsername = localStorage.getItem('username');
    if (!existingUsername) {
      alert("You don't have an account");
      window.location.href = '/signup';
    }
  }, []);


  useEffect(() => {
    // Fetch candidate data based on username
    axios.get(`/candidate/username/${encodeURIComponent(username)}`)
      .then((res) => {
        if (res.data.success) {
          setCandidate(res.data.candidate);
        }
      })
      .catch((error) => {
        console.error("Error fetching candidate data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userName, username]);  // Include username in the dependencies array

  useEffect(() => {
    // Check if id is defined before making the request
    if (id) {
      // Fetch additional data based on id
      axios.get(`/additional-data/${id}`)
        .then((res) => {
          // Process the additional data as needed
          console.log('Additional Data:', res.data);
        })
        .catch((error) => {
          console.error("Error fetching additional data:", error);
        });
    }
  }, [id]);  // Include id in the dependencies array


  const onDelete = (id) => {
    axios.delete(`/candidate/delete/${id}`).then((res) => {
      axios.delete(`/signup/delete/${username}`).then((res)=>{
        localStorage.removeItem('username'); 
        alert("deleted");
        window.location.href=('/');
      })
     

     
    });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  // Render candidate details once data is loaded
  return (
    <div>
      <h2>Candidate Details</h2>
      <p>Name: {candidate.name}</p>
      <p>Age: {candidate.age}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Event: {candidate.event}</p>
      <p>Category: {candidate.category}</p>
      <p>Phone Number: {candidate.phoneNumber}</p>
     
      <Link to={`/edit/${candidate._id}`} className="btn btn-warning">
       <i className="fas fa-edit"></i>&nbsp;Edit
     </Link>

     <button className="btn btn-danger" onClick={() => onDelete(candidate._id)}>
        <i className="far fa-trash-alt"></i>&nbsp;Delete
      </button>

    </div>
  );
};

export default UserProfile;
