import d from '../dispacher';
import * as ACT from '../types';

export function addTasks(packt){
    d.dispatch({type:ACT.ADD_TASK, payload:pack})
}