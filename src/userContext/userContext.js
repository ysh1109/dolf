import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const signin = ({ cb, user }) => {
    return fakeAuth.signin(() => {
      setUser(user);
      cb();
    });
  };

  const signout = (cb) => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout,
  };
};
