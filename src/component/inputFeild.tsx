import "./inputField.css"

interface Props{
    input:string,
    setinput:React.Dispatch<React.SetStateAction<string>>,
    handleSubmit:(e:React.FormEvent<HTMLFormElement>)=>void
}

function InputField({input,setinput,handleSubmit}:Props) {
    return (
      <div className="input p-lg-3 m-lg-5 m-sm-2">
        <form className="position-relative" onSubmit={handleSubmit}>
          <input type="text" className="form-control input p-3" placeholder="Enter your Task" onChange={(e)=>{setinput(e.target.value)}} />
          <button type="submit" className="btn btn-primary submit position-absolute top-0 end-0 m-2 me-3">Go</button>
        </form>
      </div>
    );
  }
  
  

export default InputField
