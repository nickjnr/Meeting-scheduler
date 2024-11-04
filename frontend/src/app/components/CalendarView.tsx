"use client";
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import { enUS } from "date-fns/locale";
import { Card } from "@/components/ui/card";
import useMeetingStore from "@/store/meetingStore";

const CalendarView: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const {openCreateDialog , openMeetingSheet, meetings} = useMeetingStore();


  function getRandomColor() {
    const randomColors = [
      "bg-blue-400",
      "bg-green-400",
      "bg-yellow-400"
    ];
    
    const randomIndex = Math.floor(Math.random() * randomColors.length);
    return randomColors[randomIndex];
  }


  
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center mb-4">
        <div className="cursor-pointer" onClick={prevMonth}>
          &lt;
        </div>
        <div>
          <span className="text-lg font-medium">
            {format(currentMonth, dateFormat)}
          </span>
        </div>
        <div className="cursor-pointer" onClick={nextMonth}>
          &gt;
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEE";
    const days: React.ReactNode[] = [];

    let startDate = startOfWeek(currentMonth, { weekStartsOn: 0 }); // Ensure week starts on Sunday

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="text-center flex-1 capitalize" key={i}>
          {format(addDays(startDate, i), dateFormat).substring(0, 3)}
        </div>
      );
    }

    return <div className="flex mb-2 gap-5">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Ensure week starts on Sunday
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const rows: React.ReactNode[] = [];
    let days: React.ReactNode[] = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;

        // Check if the day is in the randomDays array
        const randomDay = meetings.find((rd) => isSameDay(rd.date, day));
        const randomBgClass = randomDay ? getRandomColor() : "";

        days.push(
          <div
            className={`p-2 flex-1 text-center cursor-pointer rounded-lg ${
              !isSameMonth(day, monthStart)
                ? "text-gray-400"
                : isSameDay(day, selectedDate)
                ? "bg-gray-400 text-white rounded-lg"
                : "text-gray-800"
            } ${randomBgClass}`}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            <span>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="flex gap-5" key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const onDateClick = (day: Date) => {
    const monthStart = startOfMonth(currentMonth);
    if (!isSameMonth(day, monthStart)) {
      alert("date out of range");
    } else {
      const randomDay = meetings.find((rd) => isSameDay(rd.date, day));
      if(randomDay){
        openMeetingSheet({date:day})
      }else{
          openCreateDialog({date:day})
      }
    }
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
      <Card className="p-4 md:p-8">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      </Card>
  );
};

export default CalendarView;
