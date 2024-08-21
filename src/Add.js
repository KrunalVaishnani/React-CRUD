import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export function Add() {
  const { id } = useParams();
  const [data, setdata] = useState({});
  const navigate = useNavigate();

  return (
    <>
      <input
        type="text"
        value={data.FacultyName}
        onChange={(e) => {
          setdata({ FacultyName: e.target.value });
        }}
        placeholder="Enter Name"
      />
      <button
        onClick={() => {
          fetch("https://64e5914009e64530d17eaec0.mockapi.io/Faculty/", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          }).then(() => navigate("/"));
        }}
      >
        Add Data
      </button>
    </>
  );
}
