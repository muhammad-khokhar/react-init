import {React} from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import './styles.css';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <>
      <h2>Events</h2>
      <NavBar />
      <Container className="main">
        <EventDashboard />
      </Container>
    </>
  );
}

export default App;
