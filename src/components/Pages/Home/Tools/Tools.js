import React from "react";
import "./Tools.css";
import useLoadProducts from "../../../../Hooks/useLoadAllTools.js";
import Tool from "./Tool/Tool";

const Tools = () => {
  const [tools] = useLoadProducts();
  // console.log(tools);
  return (
    <div className="container">
      <div className="tools-container">
        {tools.slice(0, 6).map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
