import React from "react";
import "./Tools.css";
import useLoadAllTools from "../../../../Hooks/useLoadAllTools.js";
import Tool from "./Tool/Tool";

const Tools = () => {
  const [tools] = useLoadAllTools();
  const length = tools.length;
  console.log(length, "length");
  return (
    <div className="container">

      <div className="tools-container">
        {tools.slice(length - 6, length).reverse().map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
