import { useState } from 'react';
import LocalStorageEnum from '../../Enums/localstorage-enum';

const useAuth = () => {
  const [user, setUser] = useState({});

  const saveUser = (userData) => {
    window.localStorage.setItem(LocalStorageEnum.User, JSON.stringify(userData));
    setUser(userData);
  };

  try {
    const userString = window.localStorage.getItem(LocalStorageEnum.User);

    if (userString) {
      const json = JSON.parse(userString);

      if (JSON.stringify(user) !== JSON.stringify(json)) {
        setUser(json);
      }
    }

    return [user, saveUser];
  } catch {
    window.localStorage.removeItem(LocalStorageEnum.User);
    return [user, setUser];
  }
};

export default useAuth;
