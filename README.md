# Availability Calendar React

This package provides a customizable Calendar component for your React Application to allow users to set availability ranges for certain days. The component uses a state object passed from its parent to store the data. It also allows the user to hover over a given day to see the availability times they have indicated for that day.

This component is built using Material UI and contains a Material UI ThemeProvider.

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

![Screenshot](https://user-images.githubusercontent.com/48573314/99914759-9be00600-2ccd-11eb-816e-ee7bcc124560.png)

### Saving Availability

When the user hits "Save Availability" the availability that you passed to the calendar will be updated. It is stored in the following format:

```javascript
[
  {
    start: Date,
    end: Date
  },
  {
    start: Date,
    end: Date
  }
]
```

If you want to perform an additional action (like an API call) when that happens, you can alter the setAvailability that's passed to the Calendar as such:
```javascript
const Calendar = CalendarTemplate({
    availability,
    setAvailability: update => {
      performAdditionalAction(update)
      setAvailability(update)
    },
});
```

### User Experience

As a first time user I will see the blank calendar showing the current month with any days before today disabled. When I click on a day, the color of the day will change to the calendar's primary color and I can start adding times.

When I click on a time, the color will also change to the primary color to indicate availability.

After adding times to a given day, if I click another day that becomes the selected day. Any days where I have indicated availability will appear in the calendar's secondary color. If I hover my cursor over the day it will show the ranges I've indicated.

When I have selected some times, I can click "Add Selected Times to Multiple Days" and until I hit "Done" whenever I click a day it will add the given times to that day automatically (example, I can quickly add 9:00 to 5:00 for every day of the week).

### Customizing the Calendar

Currently, you are able to customize the primary color, secondary color, font color, font size, font family, start time and end time:
```javascript
const Calendar = CalendarTemplate({
    availability,
    setAvailability,
    primaryColor: "#CCCCCC",
    secondaryColor: "#EEEEEE",
    primaryFontColor: "#444444",
    fontFamily: "Roboto",
    fontSize: 14,
    startTime: "5:00",
    endTime: "22:00"
});
```
