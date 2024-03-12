import { takeEvery, put } from 'redux-saga/effects'
import { getCustomerApi, addCustomerApi, updateCustomerApi, deleteCustomerApi } from "../fetchApi/CustomerApi"
import * as types from "../constant"

function* getCustomerSaga() {
    const res = yield getCustomerApi()
    try {
        yield put ({
            type: types.READ_CUSTOMER_SUCCESS,
            payload: res.content
        })
    } catch (error) {
        yield put ({
            type: types.READ_CUSTOMER_FAILURE,
            payload: error.message
        })
    }
}

function* addCustomerSaga({payload}) {
    yield addCustomerApi(payload)
    yield getCustomerSaga()
    try {
        yield put ({
            type: types.CREATE_CUSTOMER_SUCCESS,
        })
    } catch (error) {
        yield put ({
            type: types.CREATE_CUSTOMER_FAILURE,
            payload: error.message
        })
    }
}

function* updateCustomerSaga({payload}) {
    yield updateCustomerApi(payload.id, payload.listCustomer)
    yield getCustomerSaga()
    try {
        yield put ({
            type: types.UPDATE_CUSTOMER_SUCCESS,
        })
    } catch (error) {
        yield put ({
            type: types.UPDATE_CUSTOMER_FAILURE,
            payload: error.message
        })
    }
}

function* deleteCustomerSaga({payload}) {
    yield deleteCustomerApi(payload)
    yield getCustomerSaga()
    try {
        yield put ({
            type: types.DELETE_CUSTOMER_SUCCESS,
        })
    } catch (error) {
        yield put ({
            type: types.DELETE_CUSTOMER_FAILURE,
            payload: error.message
        })
    }
}

export const CustomerSaga = [
    takeEvery(types.READ_CUSTOMER_REQUEST, getCustomerSaga),
    takeEvery(types.CREATE_CUSTOMER_REQUEST, addCustomerSaga),
    takeEvery(types.UPDATE_CUSTOMER_REQUEST, updateCustomerSaga),
    takeEvery(types.DELETE_CUSTOMER_REQUEST, deleteCustomerSaga)
]