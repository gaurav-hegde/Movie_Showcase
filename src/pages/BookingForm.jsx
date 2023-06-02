import React, { useState } from "react";

const BookingForm = () => {
  const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.removeItem("selectedMovie");

    setName("");
    setEmail("");
    setPhoneNumber("");
  };

  return (
    <div>
      <h1 className="header">Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Movie:</label>
          <p>{selectedMovie.name}</p>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
