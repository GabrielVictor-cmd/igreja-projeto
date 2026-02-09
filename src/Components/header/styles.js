import styled from "styled-components"

export const Container = styled.div`
    height: 73px;
    background: #A68A64;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const Line = styled.div`
    height: 40px;
    border-right: 1px solid #bababa;
`

export const Button = styled.button`
    border: none;
    font-weight: 500;
    color: white;
    width: 180px;
    height: 40px;
    background: #656D4A;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 5px;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity: 0.6;
    }
`

export const P = styled.p`
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
`