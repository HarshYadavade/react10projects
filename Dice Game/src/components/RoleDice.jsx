import React, { useState } from "react";
import styled from "styled-components";
const RoleDice = ({ currentDice, handleOnClick }) => {
  return (
    <DiceContainer>
      <div
        className="dice"
        onClick={() => {
          handleOnClick();
        }}
      >
        <img src={`images/dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 200px;
    max-height: 200px;
  }
  p {
    font-size: 20px;
    font-weight: 500px;
  }
  .dice {
    cursor: pointer;
  }
`;
