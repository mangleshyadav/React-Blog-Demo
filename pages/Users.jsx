import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
const API = 'https://jsonplaceholder.typicode.com/users';
const CommentsAPI = 'https://jsonplaceholder.typicode.com/posts?userId=1';



class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: false
    };


  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({users: data, isLoading: false}));
  }

  render() {
    const {users} = this.state;
    var {match} = this.props;
    return (

      <div className="row mt-3">
        {users.map(user => 
        <div className="col-4 mb-4"  key={user.id}>
          <div className="card">
              <div className="card-header bg-info text-white d-flex justify-content-between">
              <span>{user.name}</span>
               <NavLink to={"/app/UserDetail/" + user.id}  className="text-white">
                  View Detail
                </NavLink>
                </div>
              <div className="card-body">
                <h6 className="card-title">{user.email}</h6>
                <p className="card-text">
                  Access to precise, relevant, up-to-the minute data-driven content enables
                  businesses to be proactive in the face of dynamic world
                </p>
              </div>  
          </div>
        </div>
        )}
      </div>
    );
  }
}
export default Users;
