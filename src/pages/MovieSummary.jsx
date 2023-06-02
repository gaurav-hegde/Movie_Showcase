import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieSummary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    // Fetch show details using the show ID
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
      <h1>{show.name}</h1>
      <p>Summary: {show.summary}</p>
      {/* Additional show details */}
    </div>
  );
};

export default MovieSummary;
