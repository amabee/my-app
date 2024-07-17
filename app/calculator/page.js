"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/styles/calc-style.css";
import { Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Calculator = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [calculator, setCalculator] = useState({
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  });

  const inputDigit = (digit) => {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
      setCalculator({
        ...calculator,
        displayValue: String(digit),
        waitingForSecondOperand: false,
      });
    } else {
      setCalculator({
        ...calculator,
        displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
      });
    }
  };

  const handleOperator = (nextOperator) => {
    const { firstOperand, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand) {
      setCalculator({
        ...calculator,
        operator: nextOperator,
      });
      return;
    }

    if (firstOperand === null) {
      setCalculator({
        ...calculator,
        firstOperand: inputValue,
      });
    } else if (operator) {
      const result = performCalculation[operator](firstOperand, inputValue);
      setCalculator({
        ...calculator,
        displayValue: String(result),
        firstOperand: result,
      });
    }

    setCalculator((prev) => ({
      ...prev,
      waitingForSecondOperand: true,
      operator: nextOperator,
    }));
  };

  const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand,
  };

  const handleEquals = () => {
    if (!calculator.operator || calculator.firstOperand === null) return;

    const inputValue = parseFloat(calculator.displayValue);
    const result = performCalculation[calculator.operator](calculator.firstOperand, inputValue);

    setCalculator({
      displayValue: String(result),
      firstOperand: result,
      waitingForSecondOperand: false,
      operator: null,
    });
  };

  const resetCalculator = () => {
    setCalculator({
      displayValue: '0',
      firstOperand: null,
      waitingForSecondOperand: false,
      operator: null,
    });
  };

  const inputDecimal = (dot) => {
    if (!calculator.displayValue.includes(dot)) {
      setCalculator({
        ...calculator,
        displayValue: calculator.displayValue + dot,
      });
    }
  };

  const handleClickEvent = (event) => {
    const { target } = event;

    if (!target.matches("button")) {
      return;
    }

    if (target.classList.contains("operator")) {
      handleOperator(target.value);
      return;
    }

    if (target.classList.contains("decimal")) {
      inputDecimal(target.value);
      return;
    }

    if (target.classList.contains("all-clear")) {
      resetCalculator();
      return;
    }

    if (target.classList.contains("equal-sign")) {
      handleEquals();
      return;
    }

    inputDigit(target.value);
  };

  return (
    <div className="body">
      <div className="calculator card" data-aos="fade-down">
        <input
          type="text"
          className="calculator-screen z-1"
          value={calculator.displayValue}
          disabled
        />

        <div className="calculator-keys" onClick={handleClickEvent}>
          {/* OPERATORS */}
          <Button
            className="operator btn btn-info"
            value="+"
            data-aos="fade-right"
          >
            +
          </Button>
          <Button
            className="operator btn btn-info"
            value="-"
            data-aos="fade-right"
          >
            -
          </Button>
          <Button
            className="operator btn btn-info"
            value="*"
            data-aos="fade-right"
          >
            &times;
          </Button>
          <Button
            className="operator btn btn-info"
            value="/"
            data-aos="fade-right"
          >
            &divide;
          </Button>

          {/* NUMBERS */}
          <Button className="btn btn-light waves-effect" value="7">
            7
          </Button>
          <Button className="btn btn-light waves-effect" value="8">
            8
          </Button>
          <Button className="btn btn-light waves-effect" value="9">
            9
          </Button>

          <Button className="btn btn-light waves-effect" value="4">
            4
          </Button>
          <Button className="btn btn-light waves-effect" value="5">
            5
          </Button>
          <Button className="btn btn-light waves-effect" value="6">
            6
          </Button>

          <Button className="btn btn-light waves-effect" value="1">
            1
          </Button>
          <Button className="btn btn-light waves-effect" value="2">
            2
          </Button>
          <Button className="btn btn-light waves-effect" value="3">
            3
          </Button>

          <Button className="btn btn-light waves-effect" value="0">
            0
          </Button>
          <Button className="decimal btn btn-secondary function" value=".">
            .
          </Button>
          <Button
            className="all-clear btn btn-danger btn-sm function"
            value="all-clear"
          >
            AC
          </Button>

          <Button className="equal-sign btn btn-default operator" value="=">
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;