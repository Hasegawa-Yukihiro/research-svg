import React from "react";
import useApp from "./hooks";

const App: React.FC = () => {
  const { test } = useApp();

  return (
    <div
      style={{
        margin: 15
      }}
    >
      <p>{test}</p>
      <input type="file" onChange={e => console.log(e)} />
    </div>
  );
};

export default App;
