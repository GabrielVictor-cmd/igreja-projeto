import styled from "styled-components"

export const Conteiner = styled.div`
  background-color: #C2C5AA;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;

  h1 {
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