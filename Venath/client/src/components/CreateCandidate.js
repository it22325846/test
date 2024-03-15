import React, { Component } from 'react';
import axios from 'axios';




export default class CreateCandidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      event: "",
      phoneNumber: "",
      category: "",
      un:"",
      username: localStorage.getItem('username') || '',
      categoryOptions: {
        dancing: ['bboy', 'hollywood'],
        rap: ['N/A'], 
        beatbox: ['N/A'],
       
      },
     
    };
  }
  componentDidMount() {
    const storedUsername = localStorage.getItem('username');
    if (!storedUsername) {
      alert('Please log in');
      window.location.href = '/signup';
    } else {
      this.setState({ username: storedUsername });
    }
  }

 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, age, gender, event, phoneNumber, category, username } = this.state;

    const data = {
      name: name,
      age: age,
      gender: gender,
      event: event,
      phoneNumber: phoneNumber,
      category: category,
      un:username,
    };

    console.log(data);


    axios.post("/candidates/save", data).then((res) => {
      if (res.data.success) {
  
        alert('Sign-up successful!');
      
        //sessionStorage.setItem('userData', JSON.stringify(data));
        console.log('Session Data:', JSON.parse(sessionStorage.getItem('userData')));
        if(username==='admin')
        {
          window.location.href = '/admin';
        }
        else{
          window.location.href = '/profile';
        }
       

        //history.push('/userProfile', { user: data });
        // this.setState({
        //   name: "",
        //   age: "",
        //   gender: "",
        //   event: "",
        //   phoneNumber: "",
        //   category: "",
        // });
        //this.props.history.push("/Signup");
        // const userId = res.data.data._id;
        // sessionStorage.setItem('userId', userId);
        // console.log("user id",)

        // alert('Sign-up successful!');
        // window.location.href = `/Signup`;

      }
    }).catch((error) => {
      console.error("Error submitting the form:", error);
      // Handle error, show an alert or update the UI accordingly
    });
    
    
  };



  render() {
    const { event, categoryOptions,username } = this.state;
    const categories = categoryOptions[event] || [];
   
    console.log("Username state:",username);

    // if(!username)
    // {
    //   alert('Please log in');
    //   window.location.href=('/signin');
    // }
    return (
      
      <div>
        {username=='admin'?(
           <p>Add candidate and give un and pw to them</p>
        ):(
          <p>Welcome, {username}</p>
        )}
    {/* <p>Welcome, {username}</p> */}
        <h2 style={{ marginLeft: '1rem' }}>Apply for event</h2>
        <form onSubmit={this.handleSubmit} style={{marginLeft: '1rem' }}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              style={{ width: '30%' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              required
              style={{ width: '30%' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <br></br>
            <select
              className="form-select"
              id="gender"
              name="gender"
              value={this.state.gender}
              onChange={this.handleChange}
              required
              style={{ width: '10%'}}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="event" className="form-label">
              Event
            </label>
            <br></br>
            <select
              className="form-select"
              id="event"
              name="event"
              value={event}
              onChange={this.handleChange}
              required
              style={{ width: '10%' }}
            >
              <option value="">Select event</option>
              <option value="dancing">Dancing</option>
              <option value="rap">Rap</option>
              <option value="beatbox">beatbox</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <br></br>
            <select
              className="form-select"
              id="category"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              required
              style={{ width: '10%' }}
            >
              <option value="">Select category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="Number"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
              required
              style={{ width: '30%' }}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
