export const stringReducer = (state,action) =>{
    switch(action.type){
        case 'NEWSTRING':
            return action
        default:
            return null 
    }
}