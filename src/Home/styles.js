import styled from "styled-components"

export const Conteiner = styled.div`
  background-color: #c2c5aa;
  height: 100vh;
  width: 100vw;

  h1{
    text-align: center;
    margin-top: 10px;
    color: #ffd900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`
export const A = styled.a`
  text-decoration: none;
  color: #202020;
`

export const Img = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: auto;
    width: 300px;
    max-width: 100%;
    border-radius: 3px;
  }
`

export const Resume = styled.p`
  margin: 20px;
  justify-content: center;
  line-height: 25px;
  font-size: 18px;
`
