const api = "http://localhost:3001/admin";

export const getUsers = () => {
  return fetch(`${api}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const getUserTypes = () => {
  return fetch(`${api}/user_types`, {
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

export const getUserTypeFromId = (user_type_id) => {
  return fetch(`${api}/user_type?user_type_id=${user_type_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const getUserAccessConditions = (user_id) => {
  return fetch(`${api}/condition/all?user_id=${user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const deleteUser = (user_id) => {
  return fetch(`${api}/user?user_id=${user_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const updateUserType = (user_id, type) => {
  return fetch(`${api}/user_type?user_id=${user_id}&type=${type}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const updateCondition = (
  condition_id,
  predmet,
  godina_start,
  godina_end,
  sezona,
  razina
) => {
  let data = {
    condition_id: condition_id,
    predmet: predmet,
    sezona: sezona,
    razina: razina,
    godina_start: godina_start,
    godina_end: godina_end,
  };

  return fetch(`${api}/condition`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const deleteCondition = (condition_id) => {
  return fetch(`${api}/condition?condition_id=${condition_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};

export const addCondition = (user_id) => {
  return fetch(`${api}/condition?user_id=${user_id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("jwtToken"),
    },
  })
    .then((res) => res.json())
    .then((users) => {
      return users;
    })
    .catch(console.log);
};
