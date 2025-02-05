
import {Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import EventDetails from "./components/EventDetails";
import './App.css';


function App() {

  return (
    <Routes>

      <Route index element={<Home />} />
      <Route path="events/:id" element={<EventDetails />} />

    </Routes>
  )
}

export default App
