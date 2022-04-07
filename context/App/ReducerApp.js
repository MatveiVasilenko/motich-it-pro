import { CHANGE_EMION, DELETE_USER_TOKEN, USER_TOKEN } from './creators';

const ReducerApp = (state, action) => {
    switch (action.type) {
        case USER_TOKEN:
        return {
            ...state,
            user: action.payload
        }
        case DELETE_USER_TOKEN:
        return {
            ...state,
            user: false
        }
        case CHANGE_EMION:
        console.log(action.payload)
        return {
            ...state,
            user: {
                ...state.user,
                emion: action.payload
            }
        }
        default:
        return state
    }
}
export default ReducerApp