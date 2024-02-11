import React, { useEffect, useState, useContext } from "react";
import "./worklist.css";
import { Button, nativeSelectClasses } from "@mui/material";
import WorkForm from "../../components/workForm/WorkForm";
import getAllWorkApi from "../../api/work/getAllWorkApi";
import { UserContext } from "../../main";
import { useNavigate } from "react-router-dom";
import ShowWork from "../../components/showWork/ShowWork";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import deleteWorkApi from "../../api/work/deleteWorkApi";

export default function WorkList() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);
  const [workData, setWorkData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [disablePrev, setDisablePrev] = useState(true);
  const [disableNext, setDisableNext] = useState(false);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [edit, setEdit] = useState(false);

  const { state, actions } = useContext(UserContext);

  const navigate = useNavigate();

  const addToDoHandler = () => {
    setIsFormVisible(true);
  };

  const editToDoHandler = () => {
    setEdit(true);
  };

  const cancelToDoHandler = () => {
    setEdit(false);
  };

  const deleteToDoHandler = (id) => {
    deleteWorkApi(state.user.token, id);
    getData();
    setEdit(false);
  };

  const prevPageHandler = () => {
    setPage(page-1);
    setDisableNext(false);
  }

  const nextPageHandler = () => {
    setPage(page+1);
    setDisablePrev(false);
  }

  const getData = async () => {
    let data = await getAllWorkApi(page, state.user.token);
    if (data) {
      setWorkData(data[0]);
      setCount(data[1]);
      if(page == 1) setDisablePrev(true);
      if(data[1] <= page*6) setDisableNext(true);
    }
  };

  const showHandler = (i) => {
    setTitle(workData[i].title);
    setDescription(workData[i].description);
    setIsWorkVisible(true);
  };

  useEffect(() => {
    if (!state.user) {
      navigate("/login");
      return;
    }
    if(Number(Date.now()) > Number(state?.user?.time + 1000*60*60)) {
      localStorage.removeItem("user");
      actions({...state, user: ""});
      navigate("/login");
    }
    getData();
  }, [page]);
  return (
    <div className="work-list-container">
      {isFormVisible && (
        <WorkForm close={setIsFormVisible} getWork={getData} />
      )}
      {isWorkVisible && (
        <ShowWork
          close={setIsWorkVisible}
          title={title}
          description={description}
        />
      )}
      <div className="works-container">
        <h1>ToDoList</h1>
        <hr />
        <div className="todos">
          {workData.map((work, i) => {
            return (
              <div
                id={`work-${i}`}
                key={`work-${i}`}
                className="todo"
              >
                {/* {edit && <Checkbox color="default"></Checkbox>} */}
                <h2 onClick={() => showHandler(i)}>{work.title}</h2>
                {edit && <DeleteForeverIcon onClick={() => deleteToDoHandler(work._id)} fontSize="large"></DeleteForeverIcon>}
              </div>
            );
          })}
        </div>
        {!edit && <div className="btn-container">
          <Button className="btn" disabled={disablePrev} onClick={prevPageHandler} variant="standard">
            &lt;
          </Button>
          <Button className="btn" onClick={addToDoHandler} variant="standard">
            Add
          </Button>
          <Button className="btn" onClick={editToDoHandler} variant="standard">
            Edit
          </Button>
          <Button className="btn" disabled={disableNext} onClick={nextPageHandler} variant="standard">
            &gt;
          </Button>
        </div>}
        {edit && <div className="btn-container">
          <Button className="btn" onClick={cancelToDoHandler} variant="standard">
            Cancel
          </Button>
        </div>}
      </div>
    </div>
  );
}
