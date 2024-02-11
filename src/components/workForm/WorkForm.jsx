import React, {useState, useContext} from 'react';
import { TextField, Button } from "@mui/material";
import addWorkApi from '../../api/work/addWorkApi';
import "./workForm.css";
import { UserContext } from '../../main';

export default function WorkForm(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {state, actions} = useContext(UserContext);

  const submitHandler = async () => {
    const res = await addWorkApi({ title: title, description: description }, state.user.token);
    if(res) {
      props.getWork();
    }

    props.close(false);
  }

  const cancelHandler = () => {
    props.close(false);
  }
  return (
    <div className='work-form-container'>
      <div className="form">
        <h2>Add your work</h2>
        <div className="text-container">
        <TextField onChange={(e)=>setTitle(e.target.value)} label="Title" value={title} variant="filled"/>
        <TextField onChange={(e)=>setDescription(e.target.value)} label="Description" value={description} multiline rows={4} variant="filled"/>
        </div>
        <div className="btn-container">
        <Button className="btn" onClick={submitHandler} variant="standard">Save</Button>
        <Button className="btn" onClick={cancelHandler} variant="standard">Cancel</Button>
        </div>
      </div>
    </div>
  );
}
