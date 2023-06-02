import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedMovie = JSON.parse(params.get("movie"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or data handling logic

    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  useEffect(() => {
    if (!selectedMovie) {
      // Redirect to homepage or handle the missing movie scenario
      // For example, you can use history.push('/') from react-router-dom
    }
  }, [selectedMovie]);

  return (
    <div>
      <h1 className="header">Booking Form</h1>
      <div className="movie-name">
        {selectedMovie && (
          <div>
            <p>{selectedMovie.name}</p>
          </div>
        )}
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber" className="label">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="input"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
