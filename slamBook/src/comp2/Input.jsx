import React, { useState } from "react";
import "./input.css";
function Input(props) {
  //
  const [value, setValue] = React.useState("");
  const [pop, setPop] = useState(false);
  //   const data = [];

  const Add = () => {
    const data = {
      id: props.list.length + 1,
      name: value,
      work: "not done",
      imp: props.imp,
    };
    if (props.secret) {
      console.log("hi");
      props.setSdata([...props.sData, data]);
    } else {
      props.setList([...props.list, data]);
      props.setImp(false);
    }
    console.log(props.list);
    setValue("");
  };

  React.useEffect(() => {
    console.log("Updated List:", props.list);
  }, [props.list]);

  return (
    <div>
      <div className="all">
        <div className="text">
          <h1>Tasks</h1>
        </div>
        <div className="input">
          <button
            onClick={() => {
              setPop(true);
            }}
          >
            <div className="add">
              <p>ADD</p>
              <img
                src="https://img.icons8.com/?size=100&id=24717&format=png&color=000000"
                alt="plus"
                width="24"
                height="24"
              />
            </div>
          </button>
          {/*  */}
          {pop && (
            <div className="pop">
              <div className="closeText">
                <button onClick={() => setPop(false)} className="close">
                  X
                </button>
              </div>
              <input
                className="textContainer"
                type="text"
                id="inp"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              {/* important insertion */}
              <div className="important">
                <label htmlFor="imp" className="impTitle">
                  important
                </label>
                <input
                  id="imp"
                  type="checkbox"
                  checked={props.imp}
                  onChange={() => props.setImp((prev) => !prev)}
                />
              </div>
              <div className="important">
                <label htmlFor="imp" className="impTitle">
                  confidential
                </label>
                <input
                  id="secret"
                  type="checkbox"
                  checked={props.secret}
                  onChange={() => props.setSecret((prev) => !prev)}
                />
              </div>

              <button id="addBtn" onClick={Add}>
                <div className="add">
                  <p>ADD</p>
                  <img
                    src="https://img.icons8.com/?size=100&id=24717&format=png&color=000000"
                    alt="plus"
                    width="24"
                    height="24"
                  />
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;
