import React from 'react';
import { Button } from "@mui/material";
import "./showWork.css";

export default function ShowWork(props) {
    const cancelHandler = () => {
        props.close(false);
      }
  return (
    <div className='show-work-container'>
      <div className="form">
        <h2>{props.title}</h2>
        <div className="text-container">
            <div className="description">
                {props.description}
            </div>
        </div>
        <div className="btn-container">
        <Button className="btn" onClick={cancelHandler} variant="standard">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
