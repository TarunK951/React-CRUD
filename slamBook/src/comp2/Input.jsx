import React from "react";
import "./input.css";
function Input(props) {
  //
  const [value, setValue] = React.useState("");
  //   const data = [];

  const Add = () => {
    // console.log(value);
    const data = { id: props.list.length + 1, name: value, work: "not done" };
    props.setList([...props.list, data]);
    console.log(props.list);
    setValue("");
  };

  return (
    <div>
      <div className="all">
        <div className="text">
          <h1>Tasks</h1>
        </div>
        <div className="input">
          <input
            type="text"
            id="inp"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button id="addBtn" onClick={Add}>
            <img
              src="https://img.icons8.com/?size=100&id=59864&format=png&color=000000"
              alt="plus"
              width="24"
              height="24"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Input;
