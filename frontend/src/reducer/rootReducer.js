import { combineReducers } from 'redux'
import { userLoginReducer, userRegistrationReducer } from './userReducer'


const rootReducer = combineReducers({

    userLogin: userLoginReducer,
    userRegistration: userRegistrationReducer

})

export default rootReducer