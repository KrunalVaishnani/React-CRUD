import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export function FacultyDetail() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id)
      .then((res) => res.json())
      .then((res) => setFaculty(res));
  }, [id]);

  return (
    <>
      <div
        className="card col-md-2"
        style={{ width: "10rem" }}
        key={faculty.FacultyId}
      >
        <img src={faculty.FacultyImage} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{faculty.FacultyName}</h5>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id, {
              method: "DELETE",
            }).then(() => navigate("/"));
          }}
        >
          Delete
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id, {
              method: "PUT",
            }).then(() => navigate("/Edit/" + faculty.FacultyId));
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
}
