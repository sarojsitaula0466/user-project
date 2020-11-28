import React, { useState, useEffect } from "react";
import Card from "./Card";

const Home = ({ users }) => {
  return (
    <div>
      <Card users={users} />
    </div>
  );
};
export default Home;
