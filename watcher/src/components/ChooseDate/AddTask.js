import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import './addtask.scss'
const AddTask = (props) => {
  const [input, setInput] = useState({ date: "", content: "", link: "" });

  useEffect(() => {
    setInput({ ...input, date: props.date });
  }, [props.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`${apiUrl}/api/tasks`, input);
    } catch (err) {
      console.error(err);
    }
    //reset form
  };
  const addToUserSchedule = async () => {};
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="addtask-ctn">
      <p>Add new task</p>
      <form onSubmit={handleSubmit}>
        <label>Content</label>
        <input
          type="text"
          name="content"
          id="content"
          onChange={handleChange}
        ></input>
        <label>Link</label>
        <input
          type="text"
          name="link"
          id="link"
          onChange={handleChange}
        ></input>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default AddTask;
