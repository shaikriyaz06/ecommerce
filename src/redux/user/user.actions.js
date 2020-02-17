// import GET_USER from '../user.action.types'
import axios from 'axios'
// import thunk from 'redux-thunk'
 const FETCH_USER= userdataobj=>{
    //  console.log('in FETCH_USER ACTION')
    return {
        type:'FETCH_USER',
        payload:userdataobj
}
}
export const Fetch_user=(userdataobj)=>{
    // console.log(userdataobj,'in fetch_user')
    return dispatch=>{
        // console.log('inside dispatch',dispatch)
        return axios.post('http://localhost:3002/user/',userdataobj)
        .then(res=>{
            console.log(res.data.name)
            localStorage.setItem('user',res.data.name)
            dispatch(FETCH_USER(res.data))
        })
    }
}
