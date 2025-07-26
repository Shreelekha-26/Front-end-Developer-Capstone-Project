import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}