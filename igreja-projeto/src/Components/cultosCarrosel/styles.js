import styled from "styled-components"

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .rec.rec-arrow {
    background: #656d4a;
    color: #efefef;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .rec.rec-arrow:hover {
    border: 1px solid #656d4a;
    background-color: #efefef;
    color: black;
  }

  .rec.rec-arrow:disabled {
    border: none;
    background-color: rgba(101, 109, 74, 0.4);
    color: #efefef;
  }

  @media (max-width: 768px) {
    padding: 15px;

    .rec-arrow {
      min-width: 35px;
      min-height: 35px;
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    .rec-arrow {
      min-width: 30px;
      min-height: 30px;
      font-size: 16px;
    }
  }
`

export const OffersItems = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 120%;
    color: #424242;
  }
`
