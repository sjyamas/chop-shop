import React, { useState } from "react";

function Modal({ onClose }) {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: 400,
              height: 300,
              background: "#fff",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <h1 style={{ margin: 0 }}>Modal Title</h1>
            <img
              src="https://picsum.photos/200/200"
              alt="Random Image"
              style={{ marginBottom: "20px" }}
            />
            <button onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;