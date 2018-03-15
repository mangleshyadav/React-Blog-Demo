import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
const API = 'https://jsonplaceholder.typicode.com/users/';

class UserDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isLoading: false
    };
  }

  componentDidMount() {

    let url = API + this.props.match.params.id;
    this.setState({isLoading: true});
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({user: data, isLoading: false}));
  }

  render() {
    const {user} = this.state;
  console.log(user);
    return (

      <div className="row mt-3">
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-header bg-info text-white d-flex justify-content-between">
              <span>User Detail</span>
            </div>
            <div className="card-body">
              <h6 className="card-title">{user.email}</h6>
              <p className="card-text">
                Access to precise, relevant, up-to-the minute data-driven content enables
                businesses to be proactive in the face of dynamic world
              </p>
              <p></p>
              <p></p>
              <p></p>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UserDetail;
