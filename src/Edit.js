import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export function Edit() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState({
    FacultyName: "",
    FacultyImage: "",
    FacultyExp: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id)
      .then((res) => res.json())
      .then((res) => setFaculty(res));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id, {
      method: "PUT",
      body: JSON.stringify(faculty),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => setFaculty(res))
      .then(() => navigate("/"));
  };

  return (
    <div
      className="edit-form"
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "50%",
        margin: "40px auto",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#333" }}>Edit Faculty</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Faculty Name:
          <input
            type="text"
            value={faculty.FacultyName}
            onChange={(e) =>
              setFaculty({ ...faculty, FacultyName: e.target.value })
            }
            placeholder="Enter Name"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Faculty ID:
          <input
            type="text"
            value={faculty.FacultyId}
            onChange={(e) =>
              setFaculty({ ...faculty, FacultyId: e.target.value })
            }
            placeholder="Enter ID"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Faculty Image URL:
          <input
            type="text"
            value={faculty.FacultyImage}
            onChange={(e) =>
              setFaculty({ ...faculty, FacultyImage: e.target.value })
            }
            placeholder="Enter Image URL"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>
        <br />
        <label style={{ display: "block", marginBottom: "10px" }}>
          Faculty Experience:
          <input
            type="text"
            value={faculty.FacultyExp}
            onChange={(e) =>
              setFaculty({ ...faculty, FacultyExp: e.target.value })
            }
            placeholder="Enter Experience"
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </label>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
