import {axios} from "../../../common/api/default-axios.api"
import {AddTaskTodo} from "../components/interface-todo"

const token = localStorage.getItem("token");
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const addTask = async (params:AddTaskTodo) => {
  const data = await axios.post(
    "task",
    params,
    config
  );
  return data.data.data;
}

export const deleteTask = async (params:string) => {
  const data = await axios.delete(
    `task/${params}`,
    config
  );
  return data;
}

export const getTodos = async () => {
    let data = await axios.get(
    "task",
    config
  );
  return data.data.data;
}