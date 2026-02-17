//import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
    min-height: 73px;
    height: auto;
    background: #A68A64;
    box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 10px;
    padding: 10px 5px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    @media (max-width: 768px) {
        flex-direction: row;
        gap: 8px;
        padding: 8px 5px;
    }

    @media (max-width: 480px) {
        gap: 5px;
        padding: 6px 3px;
    }
`

export const Line = styled.div`
    height: 30px;
    border-right: 1px solid #bababa;

    @media (max-width: 768px) {
        height: 0;
        border: none;
    }
`

export const Button = styled.button`
    border: none;
    font-weight: 500;
    color: white;
    min-width: 140px;
    width: auto;
    height: 40px;
    padding: 0 15px;
    background: #656D4A;
    border-radius: 20px;
    white-space: nowrap;
    transition: opacity 0.2s ease;

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    &:active{
        opacity: 0.6;
    }

    @media (max-width: 768px) {
        min-width: 120px;
        font-size: 14px;
        height: 36px;
    }

    @media (max-width: 480px) {
        min-width: 100px;
        font-size: 12px;
        height: 32px;
        padding: 0 10px;
    }
`

export const P = styled.p`
    font-size: 22px;
    font-weight: 500;
    font-style: normal;
    line-height: normal;
    white-space: nowrap;

    @media (max-width: 768px) {
        font-size: 18px;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`

export const PageLink = styled.a`
    text-underline-position: ${props => props.isActive ? "under" : "none"};
    color: ${props => props.isActive ? "#ffffff" : "#ffffff"};
    line-height: 19px;
    font-size: 16px;
    font-weight: ${props => props.isActive ? "bold" : "normal"};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        line-height: 14px;
    }
`