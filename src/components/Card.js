import React from "react";
import {
  Link,
  BrowserRouter as Router,
  Route,
  useParams,
} from "react-router-dom";
import Button from "./Button";
import CardDetails from "./CardDetails";

import cardStyle from "./card.css";

const Card = ({ users }) => {
  return (
    <div className="card-wrapper">
      {users.map((user) => (
        <div key={user.id} className="card">
          <h4>{user.name}</h4>
          <p>@{user.username}</p>
          <p>{user.website}</p>
          <Link to={`/users/${user.id}`}>
            <button>More Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
