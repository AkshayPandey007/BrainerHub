import axios from "axios";
import * as types from './action.type'


export const singupRequest = () => {
    return {
        type: types.SINGUP_REQUEST
    }
}

export const singupSuccess = (payload) => {

    return {
        type: types.SINGUP_SUCCESS,
        payload
    }
}

export const singupFailure = (payload) => {
    return {

        type: types.SINGUP_FAILURE,
        payload
    }
}


export const SingupUser = ({ email, username, password }) => async (dispatch) => {
    dispatch(singupRequest());

    return axios.post("https://backend-akshaypandey007.vercel.app/user/signup", { email, username, password })
        .then((res) => {
            // console.log(res)
            return dispatch(singupSuccess(res.data))

        })
        .catch((err) => {
            return singupFailure(err)
        })
}




export const loginRequest = () => ({
    type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload
});

export const loginFailure = (payload) => ({
    type: types.LOGIN_FAILURE,
    payload
})


export const UserLogin = ({  username, password }) => async (dispatch) => {

    dispatch(loginRequest());
  
    return await axios.post("https://backend-akshaypandey007.vercel.app/user/login", {  username, password })
        .then((res) => {
            // console.log(res.data.token)
            return dispatch(loginSuccess(res.data));

        })
        .catch((err) => {
            return dispatch(loginFailure(err));

        })
}




export const productRequest = () => {
    return {
        type: types.PRODUCT_REQUEST
    }
}

export const productSuccess = (payload) => {

    return {
        type: types.PRODUCT_SUCCESS,
        payload
    }
}

export const productFailure = (payload) => {
    return {

        type: types.PRODUCT_FAILURE,
        payload
    }
}


export const addProduct = ({ image, name, price,description,quantity ,token}) => async (dispatch) => {
    console.log(token)
    dispatch(productRequest());

    return axios.post("https://backend-akshaypandey007.vercel.app/product/new", { image, name, price,description,quantity} , {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }}
    )
    
        .then((res) => {
            // console.log(res)
            return dispatch(productSuccess(res.data))

        })
        .catch((err) => {
            return productFailure(err)
        })
}



export const getproductRequest = () => {
    return {
        type: types.GET_PRODUCT_REQUEST
    }
}

export const getproductSuccess = (payload) => {

    return {
        type: types.GET_PRODUCT_SUCCESS,
        payload
    }
}

export const getproductFailure = (payload) => {
    return {

        type: types.GET_PRODUCT_FAILURE,
        payload
    }
}


export const getProductData=({search,page,limit,sort})=>async (dispatch)=>{
    dispatch(getproductRequest())
    return axios.get(`https://backend-akshaypandey007.vercel.app/product/data?search=${search}&page=${page}&limit=${limit}&order=${sort}`)
    .then((res)=>{
        // console.log(res.data)
        dispatch(getproductSuccess(res.data))
    }).catch((err) => {
        return productFailure(err)
    })
}