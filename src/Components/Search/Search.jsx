import React, { useState } from "react";
import "./Search.css";

function SearchBar({ data, addTodo, counter}) {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setShowModal(true);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSuggestionClick = (e) => {
    setQuery(e.target.innerText);
    setShowModal(false);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} value={query} />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <div
              style={{
                alignItems: "center",
              }}
            >
              {filteredData.map((item) => (
                <div key={item.name}>
                  <h3 onClick={handleSuggestionClick}>
                    {item.name}
                  </h3>
                  <button
                    onClick={() => {
                      handleModalClose();
                      item.location = "port"
                      item.counter = counter
                      const t = structuredClone(item)
                      addTodo(t);
                      setQuery("");
                    }}
                  >
                    Add to Port Chop
                  </button>
                  <button
                    onClick={() => {
                      handleModalClose();
                      item.location = "sandy"
                      item.counter = counter
                      const t = structuredClone(item)
                      addTodo(t);
                      setQuery("");
                    }}
                  >
                    Add to Sandy Chop
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
