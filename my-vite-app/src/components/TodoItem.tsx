// import type { Task } from "../types/Task";

// TodoItem.tsx (Child)

type TodoItemProps = {
  id: number;
  text: string;
  completed: boolean;
  onToggle: (taskId: number) => void;
  onDelete: (taskId: number) => void;
};

function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between", // จัดให้ข้อความกับปุ่มอยู่คนละฝั่ง
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
      }}
    >
      <span
        onClick={() => onToggle(id)}
        style={{
          cursor: "pointer",
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
