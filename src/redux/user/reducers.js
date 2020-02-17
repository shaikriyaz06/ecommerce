const Initial_State={}
const reducers=(state=Initial_State,action) => {
    switch(action.type){
        case 'FETCH_USER':
        return {
            ...state,
            ...action.payload
        }
        default :
        return state;
    }
}
export default reducers;