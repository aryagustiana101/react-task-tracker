import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggleReminder }) => {
  const dateTime = new Date(task.timestamp).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`} onDoubleClick={() => onToggleReminder(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            onDelete(task.id);
          }}
        />
      </h3>
      <p>{dateTime}</p>
    </div>
  );
};

export default Task;
