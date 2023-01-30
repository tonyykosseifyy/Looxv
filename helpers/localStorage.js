import { useState } from "react";


function useTokenStorage(key) {
  const [token, setToken] = useState(() => {
    return window.localStorage.getItem(key) || '';
  });

  function updateToken(newToken) {
    window.localStorage.setItem(key, newToken);
    setToken(newToken);
  }

  return [token, updateToken];
}

export default useTokenStorage;
