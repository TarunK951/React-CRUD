import React, { useState } from "react";
import "./display.css";

function Display(props) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editIdSData, setEditIdSData] = useState(null);
  const [editNameSData, setEditNameSData] = useState("");
  const [close, setClose] = useState(false);
  const [pop, setPop] = useState(false);

  // Delete from list
  const deleteItem = (id) => {
    console.log("Deleting item with id:", id); // Debug
    const newList = props.list.filter((item) => item.id !== id);
    console.log("New list after delete:", newList); // Debug
    props.setList(newList);
  };

  // Edit from list
  const startEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
  };

  const saveEdit = (id) => {
    const updatedList = props.list.map((item) =>
      item.id === id ? { ...item, name: editName } : item
    );
    props.setList(updatedList);
    setEditId(null);
  };

  // Done from list
  const done = (id) => {
    const item = props.list.find((i) => i.id === id);
    console.log("Marking as done:", item); // Debug
    const updatedItem = { ...item, work: "done" };
    props.setDone((prevDone) => [...prevDone, updatedItem]);
    const newList = props.list.filter((i) => i.id !== id);
    props.setList(newList);
  };

  // Delete from sData
  const deleteS = (id) => {
    console.log("Deleting sData item with id:", id); // Debug
    const newList = props.sData.filter((item) => item.id !== id);
    console.log("New sData after delete:", newList); // Debug
    props.setSdata(newList);
  };

  // Edit from sData
  const startEditS = (item) => {
    setEditIdSData(item.id);
    setEditNameSData(item.name);
  };

  const saveEditS = (id) => {
    const updatedSData = props.sData.map((item) =>
      item.id === id ? { ...item, name: editNameSData } : item
    );
    props.setSdata(updatedSData);
    setEditIdSData(null);
  };

  // Done from sData
  const doneS = (id) => {
    const item = props.sData.find((i) => i.id === id);
    console.log("Marking sData as done:", item); // Debug
    const updatedItem = { ...item, work: "done" };
    props.setDone((prevDone) => [...prevDone, updatedItem]);
    const newList = props.sData.filter((i) => i.id !== id);
    props.setSdata(newList);
  };

  const latest = () => {
    const sortedList = [...props.list].sort((a, b) => b.id - a.id);
    props.setList(sortedList);
    setPop(false);
  };

  const oldest = () => {
    const sortedList = [...props.list].sort((a, b) => a.id - b.id);
    props.setList(sortedList);
    setPop(false);
  };

  return (
    <div className="display">
      {/* title */}
      <div className="filterRo">
        <h2 className="title">On Going tasks.....</h2>

        {/*  */}
        <button onClick={() => setPop(!pop)}>Filter</button>
        {pop && (
          <div className="filter">
            <button onClick={() => latest()}>Latest</button>
            <button onClick={() => oldest()}>Oldest</button>
          </div>
        )}
      </div>
      {/* filter */}

      {/* props display */}
      {props.list.length > 0 ? (
        <ul className="list">
          {/* list disply */}
          {props.list.map((item) => (
            <li key={item.id} className="item">
              {editId === item.id ? (
                <div className="container">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <button onClick={() => saveEdit(item.id)}>Save</button>
                </div>
              ) : (
                // content disply
                <div className="container">
                  <p>Name: {item.name}</p>
                  <p>Work: {item.work}</p>
                  <p>important: {item.imp ? "yes" : "No"}</p>
                  <button onClick={() => deleteItem(item.id)}>
                    <svg
                      className="bin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                    </svg>
                  </button>
                  <button onClick={() => startEdit(item)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 24 24"
                    >
                      <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
                    </svg>
                  </button>
                  <button onClick={() => done(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 7 2 C 4.199219 2 2 4.199219 2 7 L 2 34 C 2 36.800781 4.199219 39 7 39 L 34 39 C 36.800781 39 39 36.800781 39 34 L 39 7 C 39 6.5 38.914063 6 38.8125 5.5 L 19.09375 27.40625 L 9.40625 18.6875 L 10.6875 17.1875 L 19 24.5 L 37.6875 3.6875 C 36.789063 2.6875 35.5 2 34 2 Z M 41 11 L 41 35 C 41 38.300781 38.300781 41 35 41 L 11 41 L 11 43 C 11 45.800781 13.199219 48 16 48 L 43 48 C 45.800781 48 48 45.800781 48 43 L 48 16 C 48 13.199219 45.800781 11 43 11 Z"></path>
                    </svg>
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <h3>Great ... ! All Tasks are done</h3>
      )}

      <hr onClick={() => setClose(!close)}></hr>
      {close && (
        <div>
          {props.sData.length > 0 ? (
            <ul className="list">
              {props.sData.map((item) => (
                <li key={item.id} className="item">
                  {editIdSData === item.id ? (
                    <div className="container">
                      <input
                        type="text"
                        value={editNameSData}
                        onChange={(e) => setEditNameSData(e.target.value)}
                      />
                      <button onClick={() => saveEditS(item.id)}>Save</button>
                    </div>
                  ) : (
                    <div className="container">
                      <p>Name: {item.name}</p>
                      <p>Work: {item.work}</p>
                      <p>important: {item.imp ? "yes" : "No"}</p>
                      <button onClick={() => deleteS(item.id)}>
                        <svg
                          className="bin"
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          viewBox="0 0 30 30"
                        >
                          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                        </svg>
                      </button>
                      <button onClick={() => startEditS(item)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
                        </svg>
                      </button>
                      <button onClick={() => doneS(item.id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100"
                          height="100"
                          viewBox="0 0 50 50"
                        >
                          <path d="M 7 2 C 4.199219 2 2 4.199219 2 7 L 2 34 C 2 36.800781 4.199219 39 7 39 L 34 39 C 36.800781 39 39 36.800781 39 34 L 39 7 C 39 6.5 38.914063 6 38.8125 5.5 L 19.09375 27.40625 L 9.40625 18.6875 L 10.6875 17.1875 L 19 24.5 L 37.6875 3.6875 C 36.789063 2.6875 35.5 2 34 2 Z M 41 11 L 41 35 C 41 38.300781 38.300781 41 35 41 L 11 41 L 11 43 C 11 45.800781 13.199219 48 16 48 L 43 48 C 45.800781 48 48 45.800781 48 43 L 48 16 C 48 13.199219 45.800781 11 43 11 Z"></path>
                        </svg>
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <h3>No secrets yet</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Display;
