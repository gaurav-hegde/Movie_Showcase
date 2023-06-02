import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieSummary.css";

const MovieSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="section">
        <div className="poster">
          <img src={show.image.original} alt={show.name} />
        </div>
        <div className="text">
          <div className="header">
            <h1>{show.name}</h1>
          </div>
          <div className="rating-language">
            <div className="rating">
              <h2>Rating: {show.rating.average}</h2>
            </div>
            <div className="language">
              <h2>Language: {show.language}</h2>
            </div>
          </div>
          <div className="timing">
            <h3>Timing: {show.schedule.time}</h3>

            <h3>Day: {show.schedule.days}</h3>
          </div>
          <div className="summary">
            <h3>Summary:</h3>
            <p>{show.summary}</p>
          </div>
          <Link to="/booking" className="btn btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieSummary;
