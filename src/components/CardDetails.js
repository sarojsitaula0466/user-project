import React from "react";
import { useParams } from "react-router-dom";

function CardDetails({ users }) {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {users
        .filter((user) => user.id === id)
        .map((person) => console.log(person.name))}
    </div>
  );
}

export default CardDetails;
