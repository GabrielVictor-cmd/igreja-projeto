import styled from "styled-components"

export const Conteiner = styled.div`
  background-color: #c2c5aa;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-top: 10px;
    color: #ffd900;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }

  > div:nth-child(3) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`
