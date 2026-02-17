import styled from "styled-components"

export const CardItemsCulto = styled.div`
  width: 180px;
  height: 180px;
  background-color: #ffffff;
  display: flex;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
  padding: 15px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    padding: 12px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    padding: 10px;
  }
`

export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 8px;

  h3 {
    font-size: 16px;
    font-weight: bold;
    color: #424242;
    margin: 0;
    line-height: 1.2;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: #656D4A;
    margin: 0;
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    gap: 6px;
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    gap: 4px;
    h3 {
      font-size: 12px;
    }
    p {
      font-size: 11px;
    }
  }
`