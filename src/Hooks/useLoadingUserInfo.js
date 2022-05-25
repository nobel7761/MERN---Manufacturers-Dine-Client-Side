import { useEffect, useState } from "react";

const useLoadingUserInfo = (email) => {
  const [userInfo, setUserInfo] = useState([]);

  // const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://pure-atoll-42866.herokuapp.com/user/${email}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUserInfo(data));
  }, [email]);

  return [userInfo, setUserInfo];
};

export default useLoadingUserInfo;
