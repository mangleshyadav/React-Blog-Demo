import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Header from "../components/layout/Header.jsx";
import Sidebar from "../components/layout/Sidebar.jsx";
import UserNav from "./UserNav.jsx";
import BrowseUsersPage from "./BrowseUsersPage.jsx";
import HomePage from "./HomePage.jsx";
import Blogs from "./Blogs.jsx";
import UserProfilePage from "./UserProfilePage.jsx";
// import UserSubLayout from "./UserSubLayout.jsx";
import Users from "./Users.jsx";
import UserDetail from "./UserDetail.jsx";

class Layout extends Component {
  constructor(props) {

    super(props);
    this.state = {
      showMenu: true
    };
    this.toggleMenu = this
      .toggleMenu
      .bind(this);
  }
  toggleMenu() {
    console.log('toggle button is clicked');
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    var {match} = this.props;
    return (
      <div className="primary-layout">
        <Header toggleMenu={this.toggleMenu}/>
        <div className="container-fluid">
          <div className="row">            
              <Sidebar className="sidebar" showMenu={this.state.showMenu}/>
            <div className="col">
              <Switch>
                <Route path={`${match.path}`} exact component={HomePage}/> {/*<Route path={`${match.path}/usersLayout`} component={UserSubLayout}/>*/}
                <Route path={`${match.path}/posts`} component={Blogs}/>
                <Route path={`${match.path}/users`} component={Users}/>
                <Route path={`${match.path}/UserDetail/:id`} component={UserDetail}/>
                <Redirect to={`${match.url}`}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
