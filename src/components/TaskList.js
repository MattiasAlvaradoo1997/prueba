import React from "react";
import Card from "./Card";

var array = []
var  today = new Date();
// var date = today.getDate()+'/' + (today.getMonth()+1) + '/'+today.getFullYear();

const TaskList = ({tasks}) => (
        <div>
            {
            tasks.map((task) => (
                <Card
                    key={task.id}
                    title={task.title}
                    leftcolor={task.leftColor}
                    rightcolor={task.rightColor}
                    date = {task.date}
                />
            ))
            }
        </div>
)

export default TaskList