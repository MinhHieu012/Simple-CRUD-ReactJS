import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import * as actions from "../actions/CustomerActions"

export default function Customers() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getCustomerAction())
    }, [])

    const listCustomer = useSelector((state) => state.customer).customerList

    const handleSubmit = (event) => {
        event.preventDefault()
        const customerDataAdd = {
            name: event.target.name.value,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        dispatch(actions.addCustomerAction(customerDataAdd))
        SetId('')
        SetName('')
        SetAddress('')
        SetPhone('')
    }

    const [id, SetId] = useState('')
    const [name, SetName] = useState('')
    const [address, SetAddress] = useState('')
    const [phone, SetPhone] = useState('')

    const customerDataUpdate = {
        name,
        address,
        phone
    }

    return (
        <div>
            <h3>Customer Form</h3>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" name="name" value={name} onChange={e => SetName(e.target.value)} placeholder="Enter Name" required/> <br></br>
                <label>Address: </label>
                <input type="text" name="address" value={address} onChange={e => SetAddress(e.target.value)} placeholder="Enter Address" required/> <br></br>
                <label>Name: </label>
                <input type="text" name="phone" value={phone} onChange={e => SetPhone(e.target.value)} placeholder="Enter Phone" required/> <br></br>
                <button>Add</button>
            </form>
            <button onClick={() => {
                dispatch(actions.updateCustomerAction(id, customerDataUpdate))
                SetId('')
                SetName('')
                SetAddress('')
                SetPhone('')
            }}>Update</button>

            <h3>Customer Table</h3>
            <table>
                <thead>
                    <tr>
                        <th>NO</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listCustomer.map((listCustomer, index) => (
                            <tr index={index}>
                                <td>{index + 1}</td>
                                <td>{listCustomer.name}</td>
                                <td>{listCustomer.address}</td>
                                <td>{listCustomer.phone}</td>
                                <td>
                                    <button onClick={() => {
                                        SetId(listCustomer.id)
                                        SetName(listCustomer.name)
                                        SetAddress(listCustomer.address)
                                        SetPhone(listCustomer.phone)
                                    }}>Edit</button>
                                    <button onClick={() => {
                                        dispatch(actions.deleteCustomerAction(listCustomer.id))
                                    }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}