import React from "react";
import TaskForm from "../components/TaskForm";
import Card from "../components/Card";

var tdate = new Date();
var datetoday = parseInt(tdate.getFullYear()*10000  + (tdate.getMonth()+1)*100 + tdate.getDate()) 

function colordate(date){
    try {
        var dateint = parseInt(date.toString().replaceAll("-",""))
    } catch (e) {
        return ['#037BFC', '#00C3FF']
        
    }
    if(datetoday > dateint){
        return ['#c7271c', '#ff3729']
    }
    if(datetoday < dateint){
        return ['#037BFC', '#00C3FF']
    }
    else{
        return ['#d9cd2b', '#f5d64e']
    }
}


class TaskNew extends React.Component {
    
    state = {
        form:{
            title: 'Tarea', 
            leftcolor: '#fcba03', 
            rightcolor: '#e8db4d', 
            date: tdate.getFullYear()+'-'+(tdate.getMonth()+1)+'-'+tdate.getDate()
        }
    }
    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value,
                

            }
            
        })
    }
    handleChange1 = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]:e.target.value,
                leftcolor:colordate(e.target.value.toString().replaceAll("-",""))[0],
                rightcolor:colordate(e.target.value.toString().replaceAll("-",""))[1],
                

            }
            
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        try{
            let config = {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'

                },
                body: JSON.stringify(this.state.form)
            }
            let res  = await fetch('http://localhost:8000/posts', config)
            let json = await res.json() 
        }catch(error){}
    }

    render(){
        return(
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                <TaskForm 
                    onChange={this.handleChange}
                    onChange1={this.handleChange1}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
                </div>
            </div>
        )
    }
}
export default TaskNew