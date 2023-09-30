import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  return (
    <div>
      <h2>Events</h2>
      <NavBar />
      <EventDashboard />
    </div>
  );
}

export default App;
