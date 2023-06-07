import "./task.css"
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
interface Todo{
    id:number,
    todo:string,
    isDone:Boolean
  }

interface Props{
    todo:Todo,
    index:number,
    settodo:React.Dispatch<React.SetStateAction<Todo[]>>,
    list:Todo[]
}

function Task({todo,index,settodo,list}:Props){
    const [Done,setisDone]=useState<Boolean>(false)
    const handleDelete = (index:number) => {
        const updatedList = list.filter((item, i) => i !== index);
        settodo(updatedList);
      };
      const handleDone = (index:number) => {
        setisDone(!Done);
        list[index].isDone=true;
      };
    
      return (
        <div className="ps-lg-5 ps-md-5 ps-sm-2 pe-2 pe-lg-5 pe-md-5 pb-2 task" style={{ color: "black" }}>
          <span className={`fw-bold fs-4 ${Done ? 'strikethrough' : ''}`}>
            {index + 1} <b>{todo.todo}</b>
          </span>
          <span className="float-end" onClick={()=>{handleDelete(index)}}><DeleteIcon /></span>
          <span className="float-end me-2" onClick={()=>{handleDone(index)}}><DoneIcon /></span>
          <hr />
        </div>
      );
    }

export default Task
