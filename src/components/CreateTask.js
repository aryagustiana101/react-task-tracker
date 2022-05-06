import { useState } from "react";

const CreateTask = ({ onCreate }) => {
  const [text, setText] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please enter a task!");
      return;
    }
    if (!timestamp) {
      alert("Please enter a date time!");
      return;
    }
    // onCreate({ id: Math.floor(Math.random() * 1000) + 1, text, timestamp: Date.parse(timestamp), reminder });
    onCreate({ text, timestamp: Date.parse(timestamp), reminder });
    setText("");
    setTimestamp("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Text</label>
        <input type="text" placeholder="Task Text..." value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input type="datetime-local" placeholder="Day & Time..." value={timestamp} onChange={(e) => setTimestamp(e.target.value)} />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default CreateTask;
