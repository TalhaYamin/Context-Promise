import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BigData } from "./App";

const Home = ({ filteredData }) => {

  const context = useContext(BigData)

  return (
    <div>
      <h1> This is home page </h1>
      {context?.map((item) => {
        return (
          <NavLink to={`contact/${item.id}/${item.name}` }>
            <div style={{ width: "300px", border: "2px solid red", margin:"10px 30px"}}>
              <h1>{item.name}</h1>
              <p>{item.email}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Home;
