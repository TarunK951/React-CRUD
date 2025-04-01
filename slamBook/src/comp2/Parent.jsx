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
      imp: false,
    },
    {
      id: 2,
      name: "hello",
      work: "not done",
      imp: false,
    },
  ]);

  const [sData, setSdata] = useState([
    {
      id: 1,
      name: "hi",
      work: "done",
      imp: false,
    },
    {
      id: 1,
      name: "hi",
      work: "done",
      imp: false,
    },
  ]);

  const [secret, setSecret] = useState(false);

  console.log(list);

  const [imp, setImp] = useState(false);

  const [done, setDone] = useState([]);

  return (
    <div>
      <Input
        list={list}
        setList={setList}
        imp={imp}
        setImp={setImp}
        secret={secret}
        setSecret={setSecret}
        sData={sData}
        setSdata={setSdata}
      />
      <Display
        list={list}
        setList={setList}
        done={done}
        setDone={setDone}
        imp={imp}
        setImp={setImp}
        secret={secret}
        setSecret={setSecret}
        sData={sData}
        setSdata={setSdata}
      />
      <Done done={done} setDone={setDone} list={list} setlist={setList} />
    </div>
  );
}

export default Parent;
