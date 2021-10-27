import { axios } from "../../../common/api/default-axios.api"
import { config } from "./session-default-api"

export const addTask = async (params) => {
  const data = await axios.post(
    "https://api-nodejs-todolist.herokuapp.com/task",
    params,
    config
  );

  return data.data;
}

export const deleteTask = async (params) => {
  const data = await axios.delete(
    `https://api-nodejs-todolist.herokuapp.com/task/${params}`,
    config
  );
  return data;
}

export const getTodos = async (params) => {
  let data = await axios.get(
    "https://api-nodejs-todolist.herokuapp.com/task",
    config
  );
  return data;
}