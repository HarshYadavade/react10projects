import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Buttons";
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  /* background-color: yellow; */
  /* width: 1182px; */
  display: flex;
  margin: 0 auto;
  max-width: 73.875rem;
  height: 100vh;
  align-items: center;
  .content {
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: end;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
