import React from "react";
import { Link } from "react-router-dom";

const BrowseUsersPage = ({ match }) => (
  <div >
    Browse Users
    <nav>
    <ul>
      <li>
        <Link to={`${match.path}/1`}>Brad</Link>
      </li>
      <li>
        <Link to={`${match.path}/2`}>Chris</Link>
      </li>
      <li>
        <Link to={`${match.path}/3`}>Michael</Link>
      </li>
      <li>
        <Link to={`${match.path}/4`}>Ryan</Link>
      </li>
    </ul>
    </nav>
  </div>
);

export default BrowseUsersPage;
