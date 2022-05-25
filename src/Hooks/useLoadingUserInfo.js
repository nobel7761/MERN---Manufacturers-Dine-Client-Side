import { useEffect, useState } from "react";

const useLoadingUserInfo = (email) => {
  const [singleUser, setUser] = useState([]);

  // const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${email}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [email]);

  return [singleUser, setUser];
};

export default useLoadingUserInfo;
