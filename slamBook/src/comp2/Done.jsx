import React from "react";
import "./done.css";
function Done(props) {
  return (
    <div>
      <h2 className="doneTitle">Done Tasks</h2>
      <div className="done">
        {props.done.length > 0 ? (
          <ul>
            {props.done.map((item) => (
              <li key={item.id}>
                <p className="doneList">
                  <p className="doneItem">
                    <p className="name">Name: {item.name},</p> Work: {item.work}
                  </p>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <h3>No tasks are done</h3>
        )}
      </div>
    </div>
  );
}

export default Done;
