import React, { useState, useEffect } from "react"

export function AddEvent({ onCreateEvent }) {
    const [formOpen, setFormOpen] = useState(false)
    const [formData, setFormData] = useState({
        title: "",
        eventType: "",
        location: "",
        startTime: "",
        endTime: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleMultiSelectChange = (e) => {
        const selectedOption = e.target.value;
        setFormData({
            ...formData,
            eventType: selectedOption
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateEvent(formData);
        setFormOpen(false)
        setFormData({
            title: "",
            eventType: "",
            location: "",
            startTime: "",
            endTime: ""
        });
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="add-event-container">
            {!formOpen && <button 
                type="button" 
                className="add-event-btn"
                onClick={() => {
                    setFormOpen(!formOpen)
                }}>CREATE EVENT
            </button>}
            {formOpen && <div className="add-event">
                <form className="add-event-form" onSubmit={handleSubmit} autocomplete="off">
                    <div className="event-form-header">
                        <h2 className="event-form-title">Create Event</h2>
                        <button 
                            type="button" 
                            className="event-form-x"
                            onClick={() => {
                                setFormOpen(!formOpen)
                            }}>
                            <svg class="close-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                    <label>
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                    />
                    <br />

                    <label>
                        Event Type
                    </label>
                    <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleMultiSelectChange}
                        required
                    >
                        <option value="" disabled>Select an event type</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Studying">Studying</option>
                        <option value="Shopping">Shopping</option>
                    </select>
                    <br />

                    <label>
                        Location
                    </label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                    />
                    <br />

                    <label>
                        Time Range
                    </label>
                    <div className="event-form-time-range">
                        <input
                            type="text"
                            name="startTime"
                            placeholder="Start time"
                            value={formData.startTime}
                            onChange={handleInputChange}
                            required
                        />
                        <p>-</p>
                        <input
                            type="text"
                            name="endTime"
                            placeholder="End time"
                            value={formData.endTime}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="event-form-submit">CREATE</button>
                </form>
            </div>}
        </div>
    );
}