import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import type { Task } from "../types/Task";

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Task 1", completed: false },
    { id: 2, text: "Task 2", completed: true },
    { id: 3, text: "Task 3", completed: false },
  ]);

  const [newTaskText, setNewTaskText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handdleAddTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      text: newTaskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskText("");

    console.log("ALL TASK : ", tasks);
  };

  const handleToggleTask = (taskId: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );

    console.log("updatedTasks", updatedTasks);
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    console.log("taskId", taskId);

    const updatedTasks = tasks.filter((task) => task.id !== taskId);

    const testFilter = tasks.filter((task) => task.id === taskId);
    console.log("testFilter", testFilter);

    setTasks(updatedTasks);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);

      setTasks([
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
        { id: 3, text: "Task 3", completed: false },
      ]);
    }, 1000);

    return () => {
      setIsLoading(true);
      setTasks([]);
    };
  }, []);

  return (
    <>
      <p>{isLoading ? "Loading..." : ""}</p>

      <div style={isLoading ? { display: "none" } : { display: "block" }}>
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
        />

        <button onClick={handdleAddTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            onDelete={handleDeleteTask}
            // 2. ส่งฟังก์ชันลงไปเป็น prop
            onToggle={handleToggleTask}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
