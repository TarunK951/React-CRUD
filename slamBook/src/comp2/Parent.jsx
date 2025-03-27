import React, { useState } from "react";
import Display from "./Display";
import Done from "./Done";
import Input from "./Input";
import "./all.css";

function Parent() {
  const [list, setList] = useState([
    {
      id: 1,
      name: "hi",
      work: "done",
    },
    {
      id: 2,
      name: "hello",
      work: "not done",
    },
  ]);

  const [done, setDone] = useState([]);

  return (
    <div>
      <Input list={list} setList={setList} />
      <Display list={list} setList={setList} done={done} setDone={setDone} />
      <Done done={done} setDone={setDone} list={list} setlist={setList} />
    </div>
  );
}

export default Parent;
