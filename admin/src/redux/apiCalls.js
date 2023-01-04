import { loginFailure, 
    loginStart, loginSuccess, 
    logoutStart, logoutSuccess, 
    logoutFailure } from "./userRedux"
import { getProductStart, getProductSuccess, 
    getProductFailure } from "./productRedux";
import { publicRequest } from '../requestMethods';

// LOGIN //

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const response = await publicRequest.post('/auth/login', user)
        dispatch(loginSuccess(response.data))
    } catch (error) {
        dispatch(loginFailure())
    }
};

// GET PRODUCTS //

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const response = await publicRequest.get('/products')
        dispatch(getProductSuccess(response.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
};

// LOGOUT //

export const logout = async (dispatch, user) => {
    dispatch(logoutStart());
    try {
        dispatch(logoutSuccess())
    } catch (error) {
        dispatch(logoutFailure())
    }
};