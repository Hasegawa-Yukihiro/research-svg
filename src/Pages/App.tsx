import React from "react";
import useApp from "./hooks";

const App: React.FC = () => {
  const { handleChange } = useApp();

  return (
    <div
      style={{
        margin: 15
      }}
    >
      <input type="file" onChange={handleChange} accept={"image/*"} />
    </div>
  );
};

export default App;
