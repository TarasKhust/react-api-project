import React, { useState, useEffect } from "react";

export default () => {
  const [title] = useState("my title");
  const [inputVal, updateInput] = useState("");
  const [list, updateList] = useState([]);
  const addItem = () => {
    return list.map((item, i) => <div key={i}>{item}</div>);
  };

  useEffect(() => {
    console.log('effect ran')
  }, [list, inputVal]);

  return (
    <div>
      <h3>{title}</h3>
      <input type="text" value={inputVal}
             onChange={event => updateInput(event.target.value)}/>
      <button onClick={() => {
        updateList([...list, inputVal]);
        updateInput("");
      }}>Click My
      </button>
      <button>+</button>
      <button>-</button>
      <input type="text" value={inputVal}
             onChange={(evt) => updateInput(evt.target.value)}
      />
      <h1>{addItem()}</h1>
    </div>
  );

};

