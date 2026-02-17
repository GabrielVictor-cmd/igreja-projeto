import styled from "styled-components"

export const Conteiner = styled.div`
  background-color: #c2c5aa;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  h1{
    text-align: center;
    margin-top: 10px;
    color: #ffd900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-size: 28px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
      margin-top: 8px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 20px;
      margin-top: 6px;
    }
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
  padding: 10px;

  img {
    height: auto;
    width: 300px;
    max-width: 90%;
    border-radius: 3px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      max-width: 80%;
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    padding: 8px;
    img {
      max-width: 90%;
      width: 200px;
    }
  }
`

export const Resume = styled.p`
  margin: 20px;
  justify-content: center;
  line-height: 25px;
  font-size: 18px;
  padding: 0 10px;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 23px;
    margin: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 21px;
    margin: 10px;
    padding: 0 5px;
  }
`
