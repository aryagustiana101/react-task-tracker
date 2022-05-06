import { useState } from "react";
import Tasks from "./components/Tasks";
import Header from "./components/Header";
import CreateTask from "./components/CreateTask";

const App = () => {
  const [toggleCreateTask, setToggleCreateTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      timestamp: 1651866840000,
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      timestamp: 1651866840000,
      reminder: false,
    },
    {
      id: 3,
      text: "Watch Movies",
      timestamp: 1651866840000,
      reminder: true,
    },
  ]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
  };

  return (
    <div className="container">
      <Header onToggleCreateTask={() => setToggleCreateTask(!toggleCreateTask)} toggleCreateTask={toggleCreateTask} />
      {toggleCreateTask && <CreateTask onCreate={createTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : "No tasks to show"}
    </div>
  );
};
export default App;
