import React from "react";

const currentYear = new Date().getFullYear();
function Footer() {
    return (
        <footer>
            <p>© {
                currentYear
            } Pet Care</p>
        </footer>
    );
}

export default Footer;
