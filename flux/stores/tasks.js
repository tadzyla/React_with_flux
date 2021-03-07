import EventEmitter from 'events';
import d from '../dispacher';
import * as ACT from '../types';

class TasksStore extends EventEmitter{
    constructor(){
        super();
        this.tasks = [];
        this.action = this.action.bind(this);
    }

    getTasks(){
        this.tasks.slice(0);
    }

    addTask(task){

        const tasks = this.tasks.slice(0);
        tasks.push(task);

        this.tasks = task;
        this.emit('change');
    }

    action({type, payload}){
        switch(type){
            case ACT.ADD_TASK:
                this.addTask(payload);
            break;
        }
    }
}

const store = new TasksStore();
d.register(store.action);