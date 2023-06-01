import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <h1 className="header">Welcome to QuadB Tech</h1>
      <p className="lead">
        This is a simple application to demonstrate the working of React Router
      </p>
      <hr className="my-2" />
      <p>It uses React, React Router and other libraries</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">React</h5>
          <p className="card-text">
            React is a JavaScript library for building user interfaces.
          </p>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Learn React
          </a>
        </div>
      </div>
      <p className="lead">
        <div color="primary">
          <Link to="/about">About</Link>
        </div>
      </p>
    </div>
  );
};

export default Homepage;
