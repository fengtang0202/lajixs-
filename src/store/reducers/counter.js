import { handleActions } from 'redux-actions'
import {
  INCREMENT,
  DECREMENT,
  ASYNC_INCREMENT,
  LOGIN_STATE
} from '../types/counter'

export default handleActions({
  [LOGIN_STATE](state){
    return{
      ...state,
      loginState: "我变了"
    }
  },
  [INCREMENT] (state) {
    return {
      ...state,
      num: !state.num
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload
    }
  }
}, {
  num: true,
  asyncNum: 10,
  loginState:"我没变"
})