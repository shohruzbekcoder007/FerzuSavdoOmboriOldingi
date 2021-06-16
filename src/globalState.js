import { action, observable, toJS } from "mobx";

export const globalState = observable({
  user: {
    first_name: "",
    last_name: "",
    phone_number: "",
    role: "",
    id: "",
  },
  token: "",
  search: "",
  plus: false,
});

export const setUser = action((data) => {
  sessionStorage.setItem("role", data.data.user.role);
  sessionStorage.setItem("token", data.data.token);

  globalState.user = data.data.user;
  globalState.token = data.data.token;
});

export const getToken = () => {
  return toJS(globalState.token);
};
export const getRoles = () => {
  return toJS(globalState.user.role);
};
export const setSearch = (text) => {
  globalState.search = text;
};

export const setPlus = (text) => {
  globalState.plus = text;
};

export const getPlus = action(() => {
  return globalState.plus;
});
