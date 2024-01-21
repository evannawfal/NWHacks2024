import React, { useState, useEffect } from "react"
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
    added: false,
    peopleGoing: ["Elizabeth"],
    time: "7:30 - 11:00 PM",
    eventCategory: "Studying",
    creator: "Elizabeth"
}

let events = [event1, event2, event1, event2, event1]

export function Events() {
    return (
        <div className="events">
            {events.map((ev, i) => {
                const randomOffsetStyle = {
                    position: 'relative',
                    top: `${-10 + 20 * Math.random()}px`, // Random vertical offset
                    left: `${-10 + 20 * Math.random()}px`, // Random horizontal offset
                };

                return <div className="event-card random-offset" style={randomOffsetStyle} key={i}>
                    <h3 className="event-title">{ev.title}</h3>
                    <span className="event-category">{ev.eventCategory.toUpperCase()}</span>
                    <h5 className="event-location">{`@ ${ev.location}`}</h5>
                    <button type="button" className="event-view-on-map-btn" onClick={() => {
                        window.open(ev.locationLink, '_blank');
                    }}>VIEW ON MAP</button>
                    <h4 className="event-time">{ev.time}</h4>
                    <button type="button" className="event-join-btn">JOIN {ev.creator.toUpperCase}</button>
                </div>
            })}
        </div>
    )
}