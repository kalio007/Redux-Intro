import * as actions from "./ActionTypes"

export function bugAdded = description => ({
    
    type: "action.BUG_ADDED",
    payload:{
    description
    }
});

export function bugResolved = id => ({
    type:actions.BUG_RESLOVED,
    payload:{
        id
    } 
    
})