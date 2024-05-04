import React from "react";
import Score from "./Score";
import styled from "styled-components";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";
// import { Button } from "../styles/Buttons";
const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [isShowRules, setIsShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleOnClick = () => {
    if (!selectedNumber) {
      setError("YOU HAVE NOT SELECTED ANY NUMBER");
      return;
    }
    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 1);
    }

    setSelectedNumber(undefined);
  };

  const handleReset = () => {
    setCurrentDice(1);
    setScore(0);
    setSelectedNumber(undefined);
    setError("");
  };

  const handleShowRules = () => {
    setIsShowRules((prev) => !prev);
  };

  return (
    <MainContainer>
      <Navigation>
        <Score score={score} setScore={setScore}></Score>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </Navigation>
      <RoleDice currentDice={currentDice} handleOnClick={handleOnClick} />
      <div className="btns">
        <button
          className="light"
          onClick={() => {
            handleReset();
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            handleShowRules();
          }}
        >
          Show Rules
        </button>
      </div>
      {isShowRules ? <Rules></Rules> : null}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  .btns {
    /* background-color: yellow; */
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  button {
    color: white;
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    /* min-width: 50%; */
    width: 200px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s background ease-in;
    /* &:hover {
      background-color: white;
      border: 1px solid black;
      color: black;
      transition: 0.4s background ease-in;
    } */
  }

  .light {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;
const Navigation = styled.div`
  /* padding-top: 0px; */
  display: flex;
  justify-content: space-between;
`;
