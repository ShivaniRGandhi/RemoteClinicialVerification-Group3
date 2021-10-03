import React, { useState } from "react";
import { View, Text, Date } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarPicker = ({ style }) => {
  const [selectedDate, setSelectedDate] = useState("");

  const [appointmentSelected, setAppointmentSelected] = useState(false);
  const appointments = ["2021-09-01", "2021-09-02"];
  const markedDates = {
    [selectedDate]: { selected: true },
    "2021-09-01": { marked: true, selected: appointmentSelected },
    "2021-09-02": { marked: true, selected: appointmentSelected },
  };
 
  //receive a list of appointed dates

  return (
    <View style={style}>
      <Calendar
        markedDates={markedDates}
        onDayPress={(day) => {
          console.log("selected day", day);

          var isAppointmentSelected = appointments.some((appointment) => {
            return appointment == day.dateString;
          });

          if (isAppointmentSelected) setAppointmentSelected(true);
          else setAppointmentSelected(false);

          console.log(appointmentSelected);
          setSelectedDate(day.dateString);
        }}
        theme={{
          selectedDayBackgroundColor: "#00adf5",
          arrowColor: "#00adf5",
          dotColor: "#00adf5",
          todayTextColor: "#00adf5",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

export default CalendarPicker;
