import * as types from "../constant"

export function getCustomerAction() {
    return {
        type: types.READ_CUSTOMER_REQUEST
    }
}

export function addCustomerAction(customerDataAdd) {
    return {
        type: types.CREATE_CUSTOMER_REQUEST,
        payload: customerDataAdd
    }
}

export function updateCustomerAction(id, listCustomer) {
    return {
        type: types.UPDATE_CUSTOMER_REQUEST,
        payload: { id, listCustomer }
    }
}

export function deleteCustomerAction(id) {
    return {
        type: types.DELETE_CUSTOMER_REQUEST,
        payload: id
    }
}