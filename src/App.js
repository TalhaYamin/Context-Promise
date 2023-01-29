import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import { createContext, useEffect, useState } from "react";
 
const BigData = createContext();

function App() {
  const [filteredData, setfilteredData] = useState()


  const API = "https://jsonplaceholder.typicode.com/users"

  const FetchData = async (url)=> {
    try{
      const res = await fetch(url)
      const data = await res.json()
      setfilteredData(data)
    } catch (error){
      console.log(error)
    }
  }
  console.log("filteredData", filteredData)

  useEffect (()=>{
    FetchData(API)
  }, [])

  return (
    <div className="App">
      <BigData.Provider value={filteredData}>
      <h1>This is my App</h1>
      
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/contact/:id?/:name?" element={<Contact />} />
      </Routes>
      </BigData.Provider>
    </div>
  );
}

export default App;
export { BigData };