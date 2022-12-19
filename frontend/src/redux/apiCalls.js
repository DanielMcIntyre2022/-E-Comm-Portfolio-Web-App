import { loginFailure, loginStart, loginSuccess, logoutStart, logoutSuccess, logoutFailure } from "./userRedux"
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};

export const logout = async (dispatch, user) => {
    dispatch(logoutStart());
    try {
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFailure())
    }
};