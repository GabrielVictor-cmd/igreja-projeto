import styled from "styled-components"

export const Conteiner = styled.div`
  background-color: #C2C5AA;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  h1 {
    padding: 20px;
    margin: 0;
  }
  
  > div:nth-child(3) {
    flex: 1;
    width: 100%;
    height: 100%;
  }
`