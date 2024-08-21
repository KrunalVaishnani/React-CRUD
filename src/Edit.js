import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export function Edit() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, [id]);

  return (
    <>
      <input
        type="text"
        value={data.FacultyName}
        onChange={(e) => {
          setdata({ ...data, FacultyName: e.target.value });
        }}
        placeholder="Enter Name"
      />
      <button
        onClick={() => {
          fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          })
            .then((res) => setdata(res))
            .then(() => navigate("/"));
        }}
      >
        Save
      </button>
    </>
  );
}
