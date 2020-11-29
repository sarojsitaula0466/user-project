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
          <span className="first-letter">{user.name[0]}</span>
          <h4 className="user-name">{user.name}</h4>
          <p className="user-userName">@{user.username}</p>
          <Link to="#" className="website-url">
            <p className="website">http://{user.website}</p>
          </Link>
          <Link to={`/users/${user.id}`}>
            <Button msg="MORE DETAILS" />
            {/* <button>More Details</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;
