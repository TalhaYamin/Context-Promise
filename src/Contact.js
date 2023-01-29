import React from "react";
import { useParams } from "react-router-dom";

const Contact = ({ routeHome }) => {
  const params = useParams();

  return (
    <div>
      <h1> This is {params.id} </h1>
      <h1> This is {params.name}</h1>
      {/* <h1>name{id.name}</h1> */}
    </div>
  );
};

export default Contact;
