import {createStore,combineReducers} from 'redux'
import user  from './reducers/user'
import product from './reducers/product'
import order from './reducers/order'

const store1=createStore(combineReducers({user,product,order}))
window.store=store1

export default store1