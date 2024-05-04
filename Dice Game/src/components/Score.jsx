import React from "react";
import styled from "styled-components";
const Score = ({ score, setScore }) => {
  return (
    <>
      <ScoreContainer>
        <p className="numeric">{score}</p>
        <p className="text">Total Score</p>
      </ScoreContainer>
    </>
  );
};

export default Score;
const ScoreContainer = styled.div`
  max-width: 150px;
  text-align: center;
  padding: 20px;
  .numeric {
    font-size: 65px;
    font-weight: 700px;
    line-height: 75px;
  }
  .text {
    font-size: 20px;
    font-weight: 700px;
  }
`;
