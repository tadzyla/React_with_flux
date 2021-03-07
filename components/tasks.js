import React from 'react';
import Task from './task';

export default class Tasks extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [
                {_id:0, label: 'Hello World 4.0'},
                {_id:1, label: 'Hello World 4.1'},
                {_id:2, label: 'Hello World 4.2'},
                {_id:3, label: 'Hello World 4.3'}
            ]
        }
    }
    
    render() {
        const {tasks} = this.state, 
              chl = [];

        for(const {_id, label, ...rest} of tasks) {
            chl.push(<Task key={_id}>{label}</Task>)
        }
        return <div>{chl}</div>
    }
}