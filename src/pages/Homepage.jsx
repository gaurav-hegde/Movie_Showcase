import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Gif from "../assets/scroll.png";

const Homepage = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="page">
      <div className="landing">
        <h1 className="header">Welcome to the Movie Showcase</h1>
        <p className="sub-header">
          Discover and book your favorite shows and movies.
        </p>
        <img className="scroll" src={Gif} alt="scroll" />
      </div>

      <h1 className="header">Popular Shows</h1>
      <div className="card-container">
        {shows.map((show) => (
          <div key={show.show.id} className="card">
            <div className="card-body">
              <h4 className="card-text">Rating: {show.show.rating.average}</h4>
              <img
                className="image"
                src={show.show.image.medium}
                alt={show.show.name}
              />
              <h2 className="card-title">{show.show.name}</h2>
              <p className="card-text">Language: {show.show.language}</p>
              <p className="card-text">Timing: {show.show.schedule.time}</p>
              <p className="card-text">Day: {show.show.schedule.days}</p>

              <Link to={`/shows/${show.show.id}`} className="btn btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
