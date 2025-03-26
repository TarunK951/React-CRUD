import React from "react";
import "./all.css";
import Parent from "./Parent";

function Comp1() {
  return (
    <div>
      <div className="content">
        <Parent />
      </div>
    </div>
  );
}

export default Comp1;
