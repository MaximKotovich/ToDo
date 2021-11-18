import { axios } from "../../common/api/default-axios.api"

interface LoginData {
  email: string,
  password: string,
}


export const login = async (params:LoginData) => {
  try{
    const res = await axios.post("user/login" , params)
    localStorage.setItem("token", res.data.token);
    window.location.replace("/todo"); 
  } catch (error) {
    alert("Please try again, username or password wrong");
  }
}
