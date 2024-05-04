import React from "react";
import styled from "styled-components";
import { useState } from "react";
const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  const arrnum = [1, 2, 3, 4, 5, 6];
  const selectedNumberHandler = (item) => {
    setSelectedNumber(item);
    setError("");
  };
  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrnum.map((item, index) => {
          return (
            <Box
              isSelected={item === selectedNumber}
              onClick={() => {
                selectedNumberHandler(item);
              }}
              key={index}
            >
              {item}
            </Box>
          );
        })}
      </div>
      <p className="msg">Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  padding: 20px;
  .flex {
    display: flex;
    gap: 20px;
  }
  .msg {
    font-size: 19px;
    font-weight: bold;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid black;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 500px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
