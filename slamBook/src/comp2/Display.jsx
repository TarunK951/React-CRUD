import React, { useState } from "react"; // useState import added
import "./all.css";
function Display(props) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const deleteItem = (id) => {
    const newList = props.list.filter((item) => item.id !== id);
    props.setList(newList);
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
  };
  const done = (item) => {
    console.log("Marking as done:", item); // Debug
    const updatedItem = { ...item, work: "done" };
    props.setDone([...props.done, updatedItem]);
    const newList = props.list.filter((i) => i.id !== item.id);
    props.setList(newList);
  };

  const saveEdit = (id) => {
    const updatedList = props.list.map(
      (item) => (item.id === id ? { ...item, name: editName } : item) // Syntax fixed
    );
    props.setList(updatedList);
    setEditId(null);
  };

  return (
    <div>
      <h2>On Going tasks.....</h2>
      {props.list.length > 0 ? (
        <ul>
          {props.list.map((item) => (
            <li key={item.id}>
              {editId === item.id ? (
                <>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <button onClick={() => saveEdit(item.id)}>Save</button>
                </>
              ) : (
                <>
                  Name: {item.name}, Work: {item.work}
                  <button className="" onClick={() => deleteItem(item.id)}>
                    Delete
                  </button>
                  <button className="" onClick={() => startEdit(item)}>
                    Edit
                  </button>
                  <button className="" onClick={() => done(item)}>
                    {" "}
                    Done
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h3>Great ... ! All Tasks are done</h3>
      )}
    </div>
  );
}

export default Display;
