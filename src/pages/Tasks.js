import React from "react";
import TaskList from "../components/TaskList";
import Base from "../components/Base";
import AddButton from "../components/AddButton";

class Tasks extends React.Component {
    
    state = {
            data: []            
        }

    async componentDidMount(){
        await this.fetchTasks()
    }

    fetchTasks = async () => {
        let res = await fetch('http://localhost:8000/posts')
        let data = await res.json()

        this.setState({
            data
        })

    }

    render(){
        return(
            <div>
                <Base>
                </Base>    
                <TaskList 
                    tasks={this.state.data}    
                />
                <div>
                    <AddButton/>
                </div>
            </div>
        )
    }

}

export default Tasks