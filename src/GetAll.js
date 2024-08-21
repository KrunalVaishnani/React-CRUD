import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function GetAll() {
  const [Faculty, setFaculty] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty")
      .then((res) => res.json())
      .then((res) => {
        setFaculty(res);
      });
  }, []);

  // Mapping the data and storing it in a variable
  const facultyCards = Faculty.map((ele) => {
    return (
      <>
        <div
          className="card col-md-2"
          style={{ width: "10rem" }}
          key={ele.FacultyId}
        >
          <img
            src={ele.FacultyImage}
            className="card-img-top"
            alt={ele.FacultyName}
          />
          <div className="card-body">
            <h5 className="card-title">{ele.FacultyName}</h5>
          </div>
          <Link to={"fac/" + ele.FacultyId} className="btn btn-primary">
            Detail
          </Link>
        </div>
      </>
    );
  });

  // Returning the mapped variable
  return (
    <div className="row">
      <h1>Faculty List</h1>
      <Link to={"/Add"} className="btn btn-success">
        + Add
      </Link>
      {facultyCards}
    </div>
  );
}
