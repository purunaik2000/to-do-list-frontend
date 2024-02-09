import React, {useEffect, useContext} from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../main';

export default function Home() {

  const {state, actions} = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();

  useEffect(()=>{
    if(!user) navigate( "/login" );
    if(Number(Date.now()) > Number(user?.time + 1000*60*60)) {
      localStorage.removeItem("user");
      actions({...state, user: ""});
      navigate("/login");
    }
  }, []);
  return (
    <div className="home-container">
      <h1>ToDoList</h1>
      {/* <p>Create a daily schedule for your day and manage tasks as you go.</p> */}
      <p>Welcome to <i>ToDoList</i> ! Explore a world of organized efficiency with <i>ToDoList</i>, where you can create a daily schedule for your day and manage tasks as you go. This personalized checklist is designed to guide you through a seamless journey of task accomplishment. Clearly outlining your goals, it empowers you to prioritize and tackle essential responsibilities. As you navigate each item, the intuitive layout ensures a smooth and focused workflow. Whether you're planning your day, managing projects, or pursuing personal growth, <i>ToDoList</i> is your reliable companion.</p>
    </div>
  );
}
