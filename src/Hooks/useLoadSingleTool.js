import { useState } from "react";
import { useEffect } from "react";

const useLoadSingleTool = (id) => {
  const [tool, setTool] = useState([]);
  useEffect(() => {
    fetch(`https://pure-atoll-42866.herokuapp.com/tools/${id}`)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, [id]);

  return [tool, setTool];
};

export default useLoadSingleTool;
