import { useEffect, useState, useRef } from 'react';
import axios from '../api/axios';
import { Link } from "react-router-dom";
import Header from './Header';
import '../App.css';


function Home() {
  const [events, setEvents] = useState([]);
  const fetchCalled = useRef(false); // Track if fetch is already called

  useEffect(() => {
    if (fetchCalled.current) return; // Prevent duplicate calls

    const fetchData = async () => {
      try {
        const { data } = await axios.get('/api/events/')
        console.log(data);
        setEvents(data);
      } catch (err) {
        console.err("Error fetching events:", err);
      }
    }

    fetchData()
    
    fetchCalled.current = true;
  }, [])

  if (!fetchCalled.current) return <p>Loading events...</p>
  if (events.length === 0) return <p>There is no event yet...</p>;

  return (
    <>

      <Header></Header>
      <main>
        <h1>Didlydoo</h1>
        <div className="card">
          <section>
            <ul>
              {events.map(ev => (
                <li key={ev.id}>
                  <Link to={`events/${ev.id}`}>
                    {ev.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <footer className="read-the-docs">
        This is the footer
      </footer>
    </>
  )
}

export default Home
