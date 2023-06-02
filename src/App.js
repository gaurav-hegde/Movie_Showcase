import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MovieSummary from "./pages/MovieSummary";
import BookingForm from "./pages/BookingForm";

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
