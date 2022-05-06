import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Tasks from "./Tasks";
import Header from "./Header";
import Footer from "./Footer";
import CreateTask from "./CreateTask";

const Home = () => {
  const [toggleCreateTask, setToggleCreateTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5001/tasks");
    const data = await res.json();
    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5001/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  const createTask = async (task) => {
    const res = await fetch("http://localhost:5001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const res = await fetch(`http://localhost:5001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...taskToToggle,
        reminder: !taskToToggle.reminder,
      }),
    });
    const data = await res.json();
    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  return (
    <>
      <Header onToggleCreateTask={() => setToggleCreateTask(!toggleCreateTask)} toggleCreateTask={toggleCreateTask} />
      {toggleCreateTask && <CreateTask onCreate={createTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} /> : "No tasks to show"}
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
