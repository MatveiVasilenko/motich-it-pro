import { USER_TOKEN, DELETE_USER_TOKEN, CHANGE_EMION } from './creators';

export const createToken = (user) => ({
    type: USER_TOKEN,
    payload: user
})
export const deleteToken = () => ({
    type: DELETE_USER_TOKEN
})
export const changeEmion = (emion) => ({
    type: CHANGE_EMION,
    payload: emion
})