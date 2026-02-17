import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 400px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    
    .leaflet-container {
        width: 100%;
        height: 100%;
        border-radius: 8px;
        flex: 1;
    }

    @media (max-width: 768px) {
        height: 350px;
        padding: 8px;
    }

    @media (max-width: 480px) {
        height: 300px;
        padding: 6px;
    }
`
