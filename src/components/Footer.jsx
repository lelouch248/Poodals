import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <div className="home-footer">
            <p>© {
                currentYear
            } Pet Care</p>
        </div>
    );
}

export default Footer;
