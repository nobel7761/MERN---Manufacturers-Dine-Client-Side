import { useEffect, useState } from "react";

const useLoadingUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState([]);

  // const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, [email]);

  return [userInfo, setUserInfo];
};

export default useLoadingUserInfo;
