import React from 'react'

const Task = props => {
    const {tasks, setTasks} = props;
    console.log(tasks);

    const change = i => {
        let oneTask = [...tasks];
        if (oneTask[i].isComplete === false) {
            oneTask[i].isComplete = true;
        } else {
            oneTask[i].isComplete = false;
        }
        setTasks(oneTask);
    }

    const onDelete = (i) => {
        let oneTask = [...tasks];
        delete oneTask[i];
        setTasks(oneTask);
    }

    return (
        <div>
            {
                tasks.map( (item, i) =>
                <div key= {i}><p>{item.name}</p><input type="checkbox" name="done" onClick={() => change(i)}/>
                {
                    item.isComplete === true ?
                    <button onClick={() => onDelete(i)}>Delete</button> 
                    : ''
                }</div>
            )}
        </div>
    )
}

export default Task
