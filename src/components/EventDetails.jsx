import { useState, useEffect, useRef } from "react";
import axios from '../api/axios';
import { useParams, Link } from "react-router-dom";
import Header from "./Header";


function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const fetchCalled = useRef(false); // Track if fetch is already called

  useEffect(() => {
    if (fetchCalled.current) return; // Prevent duplicate calls

    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/events/${id}`)
        console.log(data);
        setEvent(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData()
    fetchCalled.current = true;
  }, [id])


  if (!fetchCalled.current) return <p>Loading event details...</p>;
  if (!event) return <h2>Event not found</h2>;

  return (
    <div>
      <Header></Header>
      <h2>Event Details</h2>
      <p><strong>Event Name:</strong> {event.name}</p>
    </div>
  );
}


export default EventDetails;