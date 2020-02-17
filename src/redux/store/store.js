import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootreducer from '../../rootreducer'
import thunk from 'redux-thunk'
 const middlewares=[thunk,logger]
const store=createStore(rootreducer,applyMiddleware(...middlewares))
export default store;