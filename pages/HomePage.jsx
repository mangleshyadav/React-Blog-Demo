import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
const UsersAPI = 'https://jsonplaceholder.typicode.com/users';
const BlogsAPI = 'https://jsonplaceholder.typicode.com/posts';
const CommentsAPI = 'https://jsonplaceholder.typicode.com/comments';


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      posts: [],
      comments: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true});
    fetch(UsersAPI)
      .then(response => response.json())
      .then(data => this.setState({users: data, isLoading: false}));

    fetch(BlogsAPI)
      .then(response => response.json())
      .then(data => this.setState({posts: data, isLoading: false}));

    fetch(CommentsAPI)
      .then(response => response.json())
      .then(data => this.setState({comments: data, isLoading: false}));
  }

  render() {
    const {users, posts, comments} = this.state;
    // const {posts} = this.state;

    return (
      <div className="col-12">
        <div className="row mt-3">

          <div className="col-4 mb-4">
            <div className="card text-white bg-success">
              <div className="card-header d-flex justify-content-between">
                <span>
                  <i className="fa fa-user pr-2" aria-hidden="true"></i>
                  User
                </span>
                <NavLink to="/app/users" className="text-white" activeClassName="active ">
                  Show All
                </NavLink>
                {/*<a href="javascript:void(0)" className="text-white"></a>*/}
              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-between">
                  <small>Total Users :</small>
                  <small className="badge  badge-primary">{users.length}</small>
                </h4>
                <p className="card-text"></p>
              </div>
            </div>
          </div>

          <div className="col-4 mb-4">
            <div className="card text-white bg-warning">
              <div className="card-header d-flex justify-content-between">
                <span>
                  <i className="fa fa-podcast pr-2" aria-hidden="true"></i>
                  Posts</span>
                <NavLink to="/app/posts" className="text-white" activeClassName="active ">
                  Show All
                </NavLink>

              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-between">
                  <small>Total posts :</small>
                  <small className="badge  badge-primary">{posts.length}</small>
                </h4>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-4 mb-4">
            <div className="card text-white bg-info">
              <div className="card-header d-flex justify-content-between">
                <span>
                  <i className="fa fa-comments pr-2" aria-hidden="true"></i>Comments</span>
                <NavLink to="/app/comments" className="text-white" activeClassName="active ">
                  Show All
                </NavLink>
              </div>
              <div className="card-body">
                <h4 className="card-title d-flex justify-content-between">
                  <small>Total Comments :</small>
                  <small className="badge  badge-primary">{comments.length}</small>
                </h4>
                <p className="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-4">

            <table className="table table-sm table-collapsed table-bordered">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserName</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>)}
              </tbody>
            </table>

          </div>

        </div>
      </div>
    );
  }
}
export default HomePage;
