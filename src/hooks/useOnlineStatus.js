import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [userOnlineStatus, setUserOnlineStatus] = useState(true);
  // check if user is online
  useEffect(() => {
    window.addEventListener("offline", () => {
      setUserOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setUserOnlineStatus(true);
    });
  }, []);
  return userOnlineStatus;
};

export default useOnlineStatus;
