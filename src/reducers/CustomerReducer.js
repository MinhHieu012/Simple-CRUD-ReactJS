import * as types from "../constant"

const DEFAULT_STATE = {
    customerList: [],
    isFetching: false,
    dataFetching: false,
    error: false,
    errorMessage: null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case types.READ_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.READ_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
                customerList: action.payload
            }
        case types.READ_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.CREATE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
            }
        case types.CREATE_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.UPDATE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
            }
        case types.UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        case types.DELETE_CUSTOMER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case types.DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetching: true,
                error: false,
                errorMessage: null,
            }
        case types.DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                isFetching: false,
                dataFetching: false,
                error: true,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state
    }
}