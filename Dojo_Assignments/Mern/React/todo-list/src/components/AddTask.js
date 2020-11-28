import React from 'react'

const AddTask = props => {
    const { tasks, setTasks } = props;
    let task = {
        name: '',
        isComplete: false
    };

    const onChange = (e) => {
        task.name = e.target.value;
    }
    const onClick = (e) => {
        setTasks([...tasks, task]);
        task = '';
        e.target.value = '';
    }

    return (
        <div>
            <input type="text" name="task" onChange={onChange}/>
            <button onClick={onClick}>Add</button>
        </div>
    )
}

export default AddTask
