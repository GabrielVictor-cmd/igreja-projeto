import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        outline: none;
    }
    
    html, body, #root {
        height: 100%;
        width: 100%;
        overflow-y: hidden;
    }

`