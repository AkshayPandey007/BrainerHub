import * as types from './action.type'

const inState = {
    isLoading: false,
    isError: false,
    token:"",
    isProLoad:false,
    product:[],
    isGetProLoad:false,
    total:0
}


export const reducer = (state = inState, action) => {

    const { type, payload } = action;

    switch (type) {

        case types.SINGUP_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.SINGUP_SUCCESS: {

            return {
                ...state,
                isLoading: false,
            }
        }

        case types.SINGUP_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }

        case types.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.LOGIN_SUCCESS: {
            // console.log(payload.data.token)
            return {
                ...state,
                isLoading: false,
                payload,
                token: payload.token

            }
        }

        case types.LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        }
        case types.PRODUCT_REQUEST: {
            return {
                ...state,
                isProLoad: true
            }
        }
        case types.PRODUCT_SUCCESS: {

            return {
                ...state,
                isProLoad: false,
            }
        }




        case types.GET_PRODUCT_REQUEST: {
            return {
                ...state,
                isGetProLoad: true,
            }
        }
        case types.GET_PRODUCT_SUCCESS: {
            return {
                ...state,
                isGetProLoad: false,
                product:payload.msg.data,
                total:payload.msg.total
            }
        }
        
        
        default:
            return state


    }
}