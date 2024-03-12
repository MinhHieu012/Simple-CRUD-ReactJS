import React from "react";
import { Link } from "react-router-dom";
import Customers from "../component/Customers";

function CustomerPage() {
    return (
        <div className="CustomerPage">
            <h1>Customer Page</h1>
            <Link to="/">Move to HomePage</Link>
            <Customers/>
        </div>
    )
}


export default CustomerPage;