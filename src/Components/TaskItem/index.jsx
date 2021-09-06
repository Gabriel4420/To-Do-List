import React from 'react';

import {TaskItemLayout} from './style';

function TaskItem(props) {
   
    
    return (
        <TaskItemLayout key  onClick={props.onClick} colorTask={props.colorTask} bgTask={props.bgTask} done={props.done} >
            {props.task}
        </TaskItemLayout>
            

        
    )
}

export default TaskItem
