import React, { useState } from 'react';
import CalendarTemplate from './components/Calendar';

function App() {
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability,
  });
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default App;
