import React from "react";

function Footer() {
    const year = new Date()
    const date = year.getFullYear()
    return (
        <footer>
            <p>Copyright {date}</p>
        </footer>
    )
}

export default Footer;