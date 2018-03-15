import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import UserNav from './UserNav'
// Sub Layouts
import BrowseUsersPage from './BrowseUsersPage'
import AddUserPage from './AddUserPage'
import UserProfilePage from './UserProfilePage'

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
        <h1>${console.log(match)}</h1> 
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowseUsersPage} />
        <Route path={`${match.path}/add`}  component={AddUserPage} />
        <Route path={`${match.path}/:userId`}  component={UserProfilePage} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout




