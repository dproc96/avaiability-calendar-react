# Availability Calendar React

This package provides a customizable Calendar component for your React Application to allow users to set availability ranges for certain days.

## Basic Setup

After installing this package, you can import the CalendarTemplate function. You must then create an instance of useState for availability and pass it to the CalendarTemplate as such:
```javascript
import React, { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';

function App() {
  const [availability, setAvailability] = useState([])
  const Calendar = CalendarTemplate({
    availability,
    setAvailability
  })
  return (
    <div>
      <Calendar />
    </div>
  );
}

export default App;
```

![Screenshot](https://user-images.githubusercontent.com/48573314/99914330-b2389280-2cca-11eb-88c2-2c00a8177d5a.png)

### Saving Availability

When the user hits "Save Availability" the availability that you passed to the calendar will be updated. If you want to perform an additional action (like an API call) when that happens, you can alter the setAvailability that's passed to the Calendar as such:
```javascript
const Calendar = CalendarTemplate({
    availability,
    setAvailability: update => {
      performAdditionalAction(update)
      setAvailability(update)
    },
});
```

### Customizing the Calendar

Currently, you are able to customize the primary color, secondary color, font color, font size, and font family:
```javascript
const Calendar = CalendarTemplate({
    availability,
    setAvailability,
    primaryColor: "#CCCCCC",
    secondaryColor: "#EEEEEE",
    primaryFontColor: "#444444",
    fontFamily: "Roboto",
    fontSize: 14
});
```
