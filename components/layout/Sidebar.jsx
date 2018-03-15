import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                {this.props.showMenu && <ul className="list-group">
                    <li className="list-group-item">
                        <NavLink to="/app" exact activeClassName="active">
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/app/users" activeClassName="active">
                            Users
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/app/posts" activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                    <li className="list-group-item">
                        <NavLink to="/app/usersLayout" activeClassName="active">
                            Users
                        </NavLink>
                    </li>
                    <li className="list-group-item">
                        <NavLink to="/app/users" activeClassName="active">
                            Setting
                        </NavLink>
                    </li>
                </ul>
}
            </div>
        );
    }
}

export default Sidebar;
