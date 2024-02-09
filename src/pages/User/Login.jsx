import React, {useState, useContext, useEffect} from "react";
import { UserContext } from "../../main";
import "./user.css";
import { TextField, Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import loginApi from "../../api/user/login";

export default function Login() {

  const {state, actions} = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/register');
  }

  const submitHandler = async () => {
    let res = await loginApi({
      email: email,
      password: password
    });
    if(res) {
      const user = JSON.stringify(res.data);
      localStorage.setItem("user", user);
      actions({...state, user: res.data});
      alert(res.message);
      navigate("/");
    }
  }

  useEffect(()=>{
    if(state.user) navigate( "/profile" );
  },[ state.user ]);
  return (
    <div className="login-container user">
      <div className="form-container">
        <h1>LogIn</h1>
        <hr />
        <div className="form">
          <div className="text-field-container">
            <TextField onChange={(e)=>setEmail(e.target.value)} value={email} className="text-field" label="Email" variant="filled" />
            <TextField onChange={(e)=>setPassword(e.target.value)} value={password} className="text-field" label="Password" variant="filled" />
          </div>
          <div className="btn-container">
            <Button className="btn" onClick={submitHandler} variant="standard">Submit</Button>
            <Button className="btn" onClick={redirectToRegister} variant="standard">Register</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
