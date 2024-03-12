const urlJSON = "http://localhost:3001/customer/"
const urlBE = "http://localhost:8080/customers/"

export function getCustomerApi() {
    return new Promise((resolve, reject) => {
        fetch(urlBE + "get", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .then((err) => reject(err))
    })
}

export function addCustomerApi(customerDataAdd) {
    return new Promise((resolve, reject) => {
        fetch(urlBE + "add", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                customerDataAdd
            )
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .then((err) => reject(err))
    })
}

export function updateCustomerApi(id, listCustomer) {
    return new Promise((resolve, reject) => {
        fetch(urlBE + "update/" + id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                listCustomer
            )
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .then((err) => reject(err))
    })
}

export function deleteCustomerApi(id) {
    return new Promise((resolve, reject) => {
        fetch(urlBE + "delete/" + id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((res) => resolve(res))
            .then((err) => reject(err))
    })
}