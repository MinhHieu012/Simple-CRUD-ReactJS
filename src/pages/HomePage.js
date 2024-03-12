import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="HomePage">
            <h1>HomePage</h1>
            <Link to="/customers">Move to Customer Page</Link>
        </div>
    )
}


export default HomePage;