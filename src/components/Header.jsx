import React from "react";
import HighlightIcon from "@mui/icons-material/TextSnippet";

function Header() {
    return (
        <header>
            <h1>
                <HighlightIcon sx={{ fontSize: 30 }} />
                Notes
            </h1>
        </header>
    )
}

export default Header;