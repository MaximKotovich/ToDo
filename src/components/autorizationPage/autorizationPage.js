import React from "react"
import { Link } from "react-router-dom";
import "./autorizationPage.scss"

const Autoriz = () =>{
    return(
        <div className="autorizPage">
            <div className="autorizeBody">
                <div className="divForLoginInp">
                    <p>Login: </p>
                    <input type="text" className="loginInp" />
                </div>
                <div className="divForLoginInp">
                    <p>Password: </p>
                    <input type="password" className="passInp"/>
                </div>
                <div className="buttonGroup">
                    <button className="registration"><Link to="/registration">Registration</Link></button>
                    <button className="enter"><Link to="/todo">Enter</Link></button>
                </div>           
            </div>
        </div>
    )
}
export default Autoriz;