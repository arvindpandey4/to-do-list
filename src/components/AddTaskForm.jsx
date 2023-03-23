const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        <div className="row">
          <div className="col">
            <input 
              value={newTask}
              onChange={ (i) => setNewTask(i.target.value)}
              className="form-control form-control-lg border border-dark" placeholder = "Eg. Laundry at 6pm"/>
          </div>
          <div className="col-auto">
            <button
              onClick={addTask}
              className="btn btn-lg btn-success">
                Add a Task</button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;