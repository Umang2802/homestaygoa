import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100%;
  position: relative;
  background-color: #92e3a9;
  font-family: "Montserrat", sans-serif;
`;

export const Row = styled.div`
  display: grid;
  margin-left: 135px;
  margin-right: 135px;
  grid-template-columns: repeat(2, auto);
  justify-content: space-around;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, auto);
    margin: auto;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    margin-bottom: 30px;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
  fontfamily: "Montserrat", sans-serif;
  font-weight: bold;

  @media (max-width: 1200px) {
    font-size: 16px;
    margin-bottom: 2px;
  }
`;

export const Contact = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  fontfamily: "Montserrat", sans-serif;

  @media (max-width: 1200px) {
    font-size: 10px;
    margin-bottom: 5px;
  }
`;
