import React, { useState, useEffect } from "react";

// import { Link } from "react-router-dom";

import { ChopCars } from "../../Data/carData";
import SearchBar from "../Search/Search";
import Car from "./Car";

import '../../Pages/App.css'

function CarsList() {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    const storedCount = localStorage.getItem("count");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
    if (storedCount) {
      setCounter(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("count", counter);
  }, [todos]);

  const addTodo = (add) => {
    setTodos([...todos, add]);
    setCounter((counter) => Number(counter) + 1);
  };

  const removeTodo = (id) => {
    console.log(id);

    setTodos(todos.filter((car) => car.counter != id));
  };

  console.log("todos", todos);
  return (
    <div className='App-header' style={{textAlign: 'center'}}>
      <header
        style={{
          position: "fixed",
          top: "0",
          zIndex: "100",
          height: 100,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Add Car:</p> &emsp;
          <SearchBar data={ChopCars} addTodo={addTodo} counter={counter} />
        </div>
      </header>

      <div style={{marginTop: 100, }}>
        <div>
          {todos.filter((car) => car.location == "port").length > 0 && (
            <h3> Port Chop Shop</h3>
          )}
          <div style={{ display: "flex", alignItems: "center",
            justifyContent: "center", }}>
            {todos
              .filter((car) => car.location == "port")
              .map((value, index) => (
                <div key={index + value.location}>
                  <Car data={value} onClick={removeTodo} />
                </div>
              ))}
          </div>
        </div>
        <div >
          {todos.filter((car) => car.location == "sandy").length > 0 && (
            <h3> Sandy Shores Chop Shop</h3>
          )}
          <div style={{ display: "flex", alignItems: "center",
            justifyContent: "center", }}>
            {todos
              .filter((car) => car.location == "sandy")
              .map((value, index) => (
                <div key={index + value.location}>
                  <Car data={value} onClick={removeTodo} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarsList;
