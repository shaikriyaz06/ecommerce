const Initial_State={
    currentuser:null
}
const reducers=(state=Initial_State,action) => {
    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            currentuser:action.payload
        }
        default :
        return state;
    }
}
    
export default reducers;