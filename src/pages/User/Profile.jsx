import React, {useContext, useEffect} from 'react';
import { UserContext } from '../../main';
import { useNavigate } from 'react-router-dom';
import './user.css';
import { Button } from "@mui/material";


export default function Profile() {
    const {state, actions} = useContext(UserContext);
    const navigate = useNavigate();

    const  handleLogout = () => {
        localStorage.removeItem("user");
        actions({...state, user: ""});
        navigate("/login");
    }

    useEffect(()=>{
        if(!state.user) navigate('./login');
    }, []);
  return (
    <div className='profile-container user'>
      <h1>Profile</h1>
      <hr />
      <p>Name: {state.user?.name}</p>
      <p>Email: {state.user?.email}</p>
      <Button className='btn' onClick={handleLogout}>Log Out</Button>
    </div>
  );
}
