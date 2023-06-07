
import './App.css';
import InputField from './component/inputFeild';
import Task from './component/task/task';
import {useState} from "react";

interface Todo{
  id:number,
  todo:string,
  isDone:Boolean
}

const App:React.FC=()=>{
  const [input,setinput]=useState<string>("");
  const [todo,settodo]=useState<Todo[]>([])

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    settodo([...todo,{id:Date.now(),todo:input,isDone:false}])
  }
  console.log(todo)
  return (
    <div className="App p-5 p-lg-0 justify-content-center ">
        <h1 className='text-center pt-3'>Taskify</h1>
        <InputField  input={input} setinput={setinput} handleSubmit={handleSubmit}/>
        <div className='row justify-content-center  mt-3 mt-lg-0'>
          <div className='col-lg-10 col-sm-12 me-3 mb-3 mb-lg-0 task1'>
              <h3 className='text-center p-lg-3 p-md-2 '>Task to Completed</h3>
              {
                todo.map((l,i)=>{
                  if(!l.isDone){
                    return(
                      <Task todo={l} index={i} settodo={settodo} list={todo}/>
                     )
                  }
                })
              }
          </div>
          
        </div>
    </div>
  );
}

export default App;
