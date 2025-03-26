import React from "react";
import "./all.css";
function Done(props) {
  return (
    <div>
      <h2>Done Tasks</h2>
      {props.done.length > 0 ? (
        <ul>
          {props.done.map((item) => (
            <li key={item.id}>
              Name: {item.name}, Work: {item.work}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No tasks are done</h3>
      )}
    </div>
  );
}

export default Done;
