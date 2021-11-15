import React from "react";
import useApp from "./hooks";

const App: React.FC = () => {
  const { handleChange, svg } = useApp();
  return (
    <div
      style={{
        margin: 15
      }}
    >
      <input type="file" onChange={handleChange} accept={"image/*"} />
      <div
        style={{
          marginTop: 15
        }}
      />
      <img src={`data:image/svg+xml;base64,${svg}`} alt="" />
    </div>
  );
};

export default App;
