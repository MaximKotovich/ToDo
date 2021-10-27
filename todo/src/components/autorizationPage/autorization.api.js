import { axios } from "../../common/api/default-axios.api"

export default function Login(params) {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/login", params)
    .then((e) => {
      sessionStorage.setItem("token", e.data.token);
      window.location.replace("/todo");
    })
    .catch((error) => {
      alert("Please try again, username or password wrong");
    });
}
