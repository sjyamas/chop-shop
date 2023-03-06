import React, { useState, useEffect } from "react";

function StateTest() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    setTodos([
      {
        id: 1,
        name: "Ddder",
        image: "https://i.ibb.co/bXkVgpV/Adder-GTAV-front.png",
      },
    ]);
  }, []);

  console.log("todos", todos);
  return (
    <div>
      {todos.map((value, index) => (
        <div key={index}>
          <h3>{value.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default StateTest;
