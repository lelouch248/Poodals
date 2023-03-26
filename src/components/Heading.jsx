import React from "react";

function Heading({user}) {
    return (
        <div className="service-heading" >
            <h3 >Welcome to poodles,  {user.displayName}! choose the service that is required for your pet</h3>
        </div>
    ); 
}

export default Heading;