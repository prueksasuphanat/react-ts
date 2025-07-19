import { useState } from "react";

function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);

  const removeAllUser = () => {
    setUsers([]);
  };

  const AddUser = () => {
    setUsers([...users, { id: users.length + 1, name: "New User" }]);
  };

  return (
    <div>
      <button onClick={removeAllUser}>Remove All User</button>
      <button onClick={AddUser}>Add User</button>
      {/* ใช้ Ternary Operator สำหรับ if-else */}

      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}

      {users.length === 0 && <p>The user list is empty!</p>}
    </div>
  );
}

export default UserList;
