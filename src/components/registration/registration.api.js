import { axios } from "../../common/api/default-axios.api"

export default function UserRegister(params) {
  axios
    .post("https://api-nodejs-todolist.herokuapp.com/user/register", params)
    .then((e) => {
      if (e.data.token) {
        window.location.replace("/");
      }
    })
    .catch((error) => {
      alert("Please, check your data")
    });
}

