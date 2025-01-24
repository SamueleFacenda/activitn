import { useState, React } from "react";

import "./FormEvent.css";
import "../styles/style.css";
import SubmitBtn from "../components/SubmitBtn";

export default function FormEvent({ theme }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [group, setGroup] = useState(2);

  function getTextInput(stateName, setState, placeholder) {
    // return a text input that is "connected" to a state passed as a parameter
    return (
      <div className="input-section">
        <input
          type="text"
          value={stateName}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          required
          className="text-input"
        />
      </div>
    );
  }

  return (
    <div className={theme ? "dark" : "light"}>
      <div className="form-event">
        <h1>Create Event</h1>
        <form>
          <div className="row-form">
            <label className="label-form-event" htmlFor="name">
              Event Name
            </label>
            {getTextInput(name, setName, "Enter event name")}
          </div>

          <div className="row-form">
            <label className="label-form-event" htmlFor="description">
              Description
            </label>
            <div className="input-section">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter event description"
                required
                className="description-textarea"
              ></textarea>
            </div>
          </div>
          <div className="row-form">
            <label className="label-form-event" htmlFor="date">
              Date
            </label>
            <div className="input-section">
              <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="date-input"
              />
            </div>
          </div>

          <div className="row-form">
            <label className="label-form-event" htmlFor="location">
              Location
            </label>
            {getTextInput(location, setLocation, "Enter event location")}
          </div>

          <div className="row-form">
            <label className="label-form-event" htmlFor="group">
              Group Size
            </label>
            <div className="input-section">
              <input
                type="number"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                required
                min="2" // group size should be at least 1 --> doesn't make sense to have a group of 1
                className="number-input"
              />
            </div>            
          </div>

          <div className="row-form">
            <SubmitBtn text="Create Event" />
          </div>
        </form>
      </div>
    </div>
  );
}
