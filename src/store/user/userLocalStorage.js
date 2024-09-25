export const setUserLocalStorage = (userObj) => {
  window.localStorage.setItem("user", JSON.stringify(userObj));
};

export const getUserLocalStorage = () => {
  const user = window.localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const logoutUserLocalStorage = () => {
  window.localStorage.removeItem("user");
};
