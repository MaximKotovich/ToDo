import { axios } from "../../common/api/default-axios.api"

interface RegistrationData {
  name: string,
  email: string,
  password: string,
  age: number,
}


export const userRegister = async (params:RegistrationData) => {
  try{
    await axios.post("user/register" , params)
    window.location.replace("/");
  } catch (error) {
      alert("Please try again, username or password wrong")
  }
}

