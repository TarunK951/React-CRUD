import React from "react";
import "./done.css";

function Done(props) {
  const erase = (id) => {
    console.log("Erase item:", id);
    console.log("list:", props.done);
    const updatedList = props.done.filter((item) => item.id !== id);
    console.log("Filter list:", updatedList);
    props.setDone(updatedList);
  };

  return (
    <div>
      <h2 className="doneTitle">Done Tasks</h2>
      <div className="done">
        {props.done.length > 0 ? (
          <ul>
            {props.done.map((item) => (
              <li key={item.id}>
                <div className="doneList">
                  <div className="doneItem">
                    <p className="name">Name: {item.name},</p>{" "}
                    <p> Work: {item.work} </p>
                    <button onClick={() => erase(item.id)}>
                      <img
                        src="https://img.icons8.com/?size=100&id=2579&format=png&color=000000"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
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
