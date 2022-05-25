import { useState } from "react";

const useLoadSingleUser = (email) => {
  const [user1, setUser1] = useState({});

  const url = `http://localhost:5000/user/${email}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setUser1(data));

  return [user1, setUser1];
};

export default useLoadSingleUser;
