import React from "react";
import './styles/Card.css';


class TaskForm extends React.Component {
    state = {}
    
    render(){
        const {onChange,onChange1, form, onSubmit} = this.props
        return(
           <div className = "container">
               <form 
                    onSubmit={onSubmit}
               >
                   <div className = "form-group mx-auto User-Info">
                       <input
                            type = "text"
                            className = "form-control"
                            placeholder = "Tarea"
                            name="title"
                            onChange={onChange}
                            value={form.title}

                       />
                   </div>
                   <div className = "form-group mx-auto User-Info">
                       <input
                            type = "date"
                            className = "form-control"
                            placeholder = "description"
                            name = "date"
                            onChange={onChange1}
                            value={form.date}
                            
                       />
                    </div>
                   
                <button
                    className = "btn btn-primary"
                    type = "submit"
                >
                    Submit
                </button>   
               </form>
           </div>
        )
    }
}
export default TaskForm