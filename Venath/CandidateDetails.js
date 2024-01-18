// import React, { Component } from 'react'
// import axios from 'axios';
// export default class StudentDetails extends Component {
 
//  constructor(props){
//     super(props);
//     this.state={
//         student:{}
//     };
//  }

//  componentDidMount() {
//     const id = this.props.match.params.id;
  
//     axios.get(`/student/${id}`)
//     .then((res) => {
//       if (res.data.success) {
//         this.setState({
//           student: res.data.student
//         });
  
//         console.log(this.state.student);
//       }
      

//     });
    
    
//   }
  
 
 
//     render() {
//      const {name,age,gender}=this.state.student;
//     return (
//       <div>
//         Student Details
//       </div>
//     )
//   }
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CandidateDetails = () => {
  const [candidate, setCandidate] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/candidate/${id}`).then((res) => {
      if (res.data.success) {
        setCandidate(res.data.Candidate);
      }
    });
  }, [id]);

  console.log('Student Details:', candidate);

  return (
    <div>
      <h2>Student Details</h2>
      <p>Name: {candidate.name}</p>
      <p>Age: {candidate.age}</p>
      <p>Gender: {candidate.gender}</p>
      <p>Event: {candidate.event}</p>
      <p>Category: {candidate.category}</p>
      <p>Phone Number: {candidate.phoneNumber}</p>
      <Link to={`/edit/${candidate._id}`} className="btn btn-warning">
  <i className="fas fa-edit"></i>&nbsp;Edit
</Link>
    </div>
  );
};

export default CandidateDetails;
