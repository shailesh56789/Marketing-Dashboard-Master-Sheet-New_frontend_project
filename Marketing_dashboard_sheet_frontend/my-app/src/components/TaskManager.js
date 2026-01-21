import  TaskList  from "./TaskList";
export default function TaskManager({notess,children})
{
  return(
    <div>
         <div >
        {children}  
      </div>
      <TaskList  ds={notess}/>
    </div>
  );
}