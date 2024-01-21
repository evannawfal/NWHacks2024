import React, { useState, useEffect } from "react"
import { AddEvent } from "./AddEvent.js"
import { useNavigate } from "react-router-dom"
import "./styles.css"

let event1 = {
    title: "Leg Day",
    location: "Student Recreation Centre",
    locationLink: "https://www.google.com/maps/place/SRC+Building+UBC/@49.2683381,-123.2516334,17z/data=!3m2!4b1!5s0x548672b76e74acfb:0xfcd08a4a4b215d88!4m6!3m5!1s0x548672b76c21f2a7:0xafe623b70e53b36a!8m2!3d49.2683346!4d-123.2490585!16s%2Fg%2F11b7q5x8w2?entry=ttu",
    added: false,
    peopleGoing: ["Patrick", "Muhammad"],
    time: "6:00 - 8:00 PM",
    eventCategory: "Fitness",
    creator: "Patrick"
}

let event2 = {
    title: "Academic Comeback",
    location: "IKB Library",
    locationLink: "https://www.google.com/maps/place/Irving+K.+Barber+Learning+Centre/@49.2675356,-123.2552576,17z/data=!3m2!4b1!5s0x548672b6e822d5bf:0xf535698b7a82d708!4m6!3m5!1s0x548672b6e7ecb487:0xb469afb686ebb577!8m2!3d49.2675321!4d-123.2526827!16s%2Fm%2F047c4j2?entry=ttu",
    added: true,
    peopleGoing: ["Elizabeth"],
    time: "7:30 - 11:00 PM",
    eventCategory: "Studying",
    creator: "Elizabeth"
}

let event3 = {
    title: "Groceries Run",
    location: "Save On Foods",
    locationLink: "https://www.google.com/maps/place/Save-On-Foods/@49.2548182,-123.3189919,12z/data=!4m10!1m2!2m1!1ssave+on+foods!3m6!1s0x548672d05a3bcd79:0x1a9fc5e5fcfc9c6d!8m2!3d49.2548182!4d-123.2365944!15sCg1zYXZlIG9uIGZvb2RzIgOIAQFaDyINc2F2ZSBvbiBmb29kc5IBDWdyb2Nlcnlfc3RvcmXgAQA!16s%2Fg%2F1hc0zkkh3?entry=ttu",
    added: false,
    peopleGoing: ["Jeremiah"],
    time: "4:15 - 4:45 PM",
    eventCategory: "Shopping",
    creator: "Jeremiah"
}

let event4 = {
    title: "Christmas Present Shopping",
    location: "Park Royal Mall",
    locationLink: "https://www.google.com/maps/place/Save-On-Foods/@49.2548182,-123.3189919,12z/data=!4m10!1m2!2m1!1ssave+on+foods!3m6!1s0x548672d05a3bcd79:0x1a9fc5e5fcfc9c6d!8m2!3d49.2548182!4d-123.2365944!15sCg1zYXZlIG9uIGZvb2RzIgOIAQFaDyINc2F2ZSBvbiBmb29kc5IBDWdyb2Nlcnlfc3RvcmXgAQA!16s%2Fg%2F1hc0zkkh3?entry=ttu",
    added: true,
    peopleGoing: ["Talia", "Mindy"],
    time: "4:00 - 7:00 PM",
    eventCategory: "Shopping",
    creator: "Talia"
}

let event5 = {
    title: "Climbing Session",
    location: "The Hive",
    locationLink: "https://www.google.com/maps/place/Save-On-Foods/@49.2548182,-123.3189919,12z/data=!4m10!1m2!2m1!1ssave+on+foods!3m6!1s0x548672d05a3bcd79:0x1a9fc5e5fcfc9c6d!8m2!3d49.2548182!4d-123.2365944!15sCg1zYXZlIG9uIGZvb2RzIgOIAQFaDyINc2F2ZSBvbiBmb29kc5IBDWdyb2Nlcnlfc3RvcmXgAQA!16s%2Fg%2F1hc0zkkh3?entry=ttu",
    added: false,
    peopleGoing: ["Joe"],
    time: "4:00 - 6:00 PM",
    eventCategory: "Fitness",
    creator: "Joe"
}

const colorTable = {
    "Fitness": "#CF4343",
    "Studying": "#43CF94",
    "Shopping": "#9C5DEC"
}

//let events = [event1, event2, event3, event2, event1]

export function Events() {
    const [events, setEvents] = useState([
        event1, event2, event3, event4, event5
    ]);

    const handleCreateEvent = (formData) => {
        const newEvent = {
            title: formData.title,
            location: formData.location,
            locationLink: formData.locationLink,
            added: false,
            peopleGoing: [],
            time: `${formData.startTime} - ${formData.endTime}`,
            eventCategory: formData.eventType,
            creator: "Me"
        };

        setEvents(prevEvents => [...prevEvents, newEvent]);
    };

    return (
        <div className="events">
            {events.map((ev, i) => {
                const eventCardStyle = {
                    position: 'relative',
                    top: `${-10 + 40 * Math.random()}px`, // Random vertical offset
                    left: `${-10 + 40 * Math.random()}px`, // Random horizontal offset
                    //width: `${20 + Math.random() * 6}rem`,
                    //height: `${22 + Math.random() * 3}rem`
                    //`${500 + Math.random() * 100}px`, // Random width between 150 and 250 pixels
                    //height: `${500 + Math.random() * 100}px`
                };

                const categoryColor = {
                    background: `${colorTable[ev.eventCategory]}`
                }

                const categoryColorCard = {
                    background: `${colorTable[ev.eventCategory]}`,
                    boxShadow: `0px 20px 60px 5px ${colorTable[ev.eventCategory]}50`
                }

                const categoryTextColor = {
                    color: `${colorTable[ev.eventCategory]}`
                }

                return <div className="event-card" style={{...eventCardStyle, ...categoryColorCard}} key={i}>
                    <h3 className="event-title">{ev.title}</h3>
                    <span className="event-category" style={categoryColor}>{ev.eventCategory.toUpperCase()}</span>
                    <h5 className="event-location">{`@ ${ev.location}`}</h5>
                    <button type="button" className="event-view-on-map-btn" onClick={() => {
                        window.open(ev.locationLink, '_blank');
                    }} style={categoryTextColor}>VIEW ON MAP</button>
                    <h4 className="event-time">{ev.time}</h4>
                    {(!ev.added && ev.creator !== "Me") && (
                        <button
                            type="button"
                            className="event-join-btn"
                            style={categoryTextColor}
                            onClick={() => {
                                setEvents(prevEvents => {
                                    return prevEvents.map(ev2 => {
                                        if (ev2.title === ev.title) {
                                            return { ...ev2, added: true };
                                        }
                                        return ev2;
                                    });
                                });
                            }}
                        >
                            JOIN {ev.creator.toUpperCase()}
                        </button>
                    )}

                    {(ev.added && ev.creator !== "Me") && (
                        <button
                            type="button"
                            className="attending-btn"
                            style={categoryColor}
                            onClick={() => {
                                setEvents(prevEvents => {
                                    return prevEvents.map(ev2 => {
                                        if (ev2.title === ev.title) {
                                            return { ...ev, added: false };
                                        }
                                        return ev2;
                                    });
                                });
                            }}
                        >
                            ATTENDING
                        </button>
                    )}

                    {(ev.creator === "Me") && (
                        <button
                            type="button"
                            className="cancel-event-btn"
                            style={categoryColor}
                            onClick={() => {
                                setEvents(prevEvents => {
                                    return prevEvents.filter(ev2 => {
                                        return ev2.creator !== "Me"
                                    });
                                });
                            }}
                        >
                            CANCEL EVENT
                        </button>
                    )}
                </div>
            })}
        <AddEvent onCreateEvent={handleCreateEvent}/>
        </div>
    )
}