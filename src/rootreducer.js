import {combineReducers} from 'redux'
import reducers from './redux/user/reducers'
export default combineReducers({
    user:reducers
})