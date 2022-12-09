import { useEffect, useState } from "react";

export const useUniqueId = () => {
  const [uniqueId, setUniqueId] = useState("");
  useEffect(() => {
    const id = setInterval(() => {
      setUniqueId(new Date().getTime()); // get a unique id - this grabs seconds since unix epoch
    }, 3000);

    return () => clearInterval(id);
  }, []);

  return uniqueId;
};
