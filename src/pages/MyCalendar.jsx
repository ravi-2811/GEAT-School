import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import "@fullcalendar/common/main.css";
// import "@fullcalendar/daygrid/main.css";
import "./calendar.css"; // Custom CSS for styling

const MyCalendar = () => {
    return (
        <div className="calendar-container">
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                events={[
                    { title: "New Year", date: "2025-01-01", color: "#78519e" },
                    { title: "Grade 5 Dance on SRK's...", date: "2025-01-08", color: "#78519e" },
                    { title: "Guru Govind Singh Jayanti", date: "2025-01-06", color: "#78519e" },
                    { title: "Makar Sankranti", date: "2025-01-14", color: "#78519e" },
                    { title: "Republic Day", date: "2025-01-26", color: "#78519e" },
                    { title: "Chhatrapati Shivaji Maharaj Jayanti", date: "2025-02-19", color: "#78519e" }
                ]}
                eventContent={(eventInfo) => (
                    <div className="event-card" style={{ backgroundColor: eventInfo.event.backgroundColor }}>
                        {eventInfo.event.title}
                    </div>
                )}
            />
            <div className="event-ann-flex">
                <div className="info-item">
                    <div className="item-box"></div>
                    Holidays
                </div>
                <div className="info-item">
                    <div className="item-box ann"></div>
                    Events
                </div>
            </div>
        </div>

    );
};

export default MyCalendar;
