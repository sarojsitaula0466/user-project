import React from "react";
import { useParams } from "react-router-dom";
import cardStyle from "./card.css";
function CardDetails({ users }) {
  const { id } = useParams();

  const ids = Number(id);

  return (
    <div className="user-details">
      {users
        .filter((user) => user.id === ids)
        .map((user) => (
          <div>
            <p>- name: {user.name}</p>
            <p>- username: {user.username}</p>
            <p>- email: {user.email}</p>
            <p>- phone: {user.phone}</p>
            <p>- company: {user.company.name}</p>
            <p>- website: {user.website}</p>
            <p>- address:</p>
            <ul aria-label="-address:">
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default CardDetails;
