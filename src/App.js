import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import MovieSummary from "./components/MovieSummary";
import BookingForm from "./components/BookingForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shows/:id" element={<MovieSummary />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    </Router>
  );
};

export default App;
