const api = "http://localhost:3001/auth";

export const logIn = (username, password) => {
  const data = {
    username: username,
    password: password,
  };

  return fetch(`${api}/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.isSuccess) {
        console.log("Logged in");
        localStorage.removeItem("jwtToken");
        localStorage.setItem("jwtToken", data.token);
        localStorage.setItem("isAuth", true);
      }
      return data;
    })
    .catch((err) => {
      console.log("There has been an error logging in user");
      return err;
    });
};

export const logout = () => {
  localStorage.removeItem("jwtToken");
  localStorage.setItem("isAuth", false);
  window.location.reload(false);
};

export const isAuth = () => {
  return localStorage.getItem("isAuth") === "true";
};

export const getUser = () => {
  return fetch(`${api}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((user) => {
      return user;
    })
    .catch(console.log);
};

export const isAdmin = () => {
  return fetch(`${api}/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((user) => {
      return user.type === 1;
    })
    .catch(console.log);
};
