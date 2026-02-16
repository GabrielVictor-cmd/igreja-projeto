import styled from "styled-components"

export const Conteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .rec {
    background-color: transparent !important;
  }

  .rec-arrow {
    background-color: #656D4A;
    color: white;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    min-width: 40px;
    min-height: 40px;
  }

  .rec-arrow:hover {
    background-color: #A68A64;
    transform: scale(1.1);
  }

  .rec-arrow:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }

  .rec-dot {
    background-color: #999;
    border-radius: 50%;
    height: 8px;
    width: 8px;
  }

  .rec-dot.active {
    background-color: #656D4A;
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

    p{
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 120%;
        color: #424242;
    }
`