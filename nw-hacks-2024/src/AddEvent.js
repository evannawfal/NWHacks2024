import React, { useState, useEffect } from "react"

export function AddEvent() {
    const [formOpen, setFormOpen] = useState(false)

    return (
        <div className="add-event">
            {!formOpen && <button 
                type="button" 
                className="add-event-btn"
                onClick={() => {
                    setFormOpen(!formOpen)
                }}>CREATE EVENT
            </button>}
            {formOpen && <div className="create-event">
                <form className="event-form">
                    <h2 className="event-form-title">Create Event</h2>
                    <label>
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        required
                    />
                    <br />

                    <label>
                        Event Type
                    </label>
                    <select
                        className="event-form-type"
                        name="eventType"
                        multiple
                        required
                    >
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
                            required
                        />
                        <input
                            type="text"
                            name="endTime"
                            placeholder="End time"
                            required
                        />
                    </div>
                    <div className="event-form-buttons">
                        <button type="submit" className="event-form-submit">CREATE</button>
                        <button 
                            type="button" 
                            className="event-form-close"
                            onClick={() => {
                                setFormOpen(!formOpen)
                            }}>CLOSE FORM
                        </button>
                    </div>
                </form>
            </div>}
        </div>
    );
}