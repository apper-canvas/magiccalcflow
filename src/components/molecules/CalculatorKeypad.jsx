import React from "react"
import CalculatorButton from "@/components/atoms/CalculatorButton"
import ApperIcon from "@/components/ApperIcon"

const CalculatorKeypad = ({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onClearEntryClick,
  onBackspaceClick,
  onDecimalClick,
  activeOperation
}) => {
  const numberButtons = [
    { label: "7", value: "7" },
    { label: "8", value: "8" },
    { label: "9", value: "9" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "0", value: "0", wide: true },
    { label: ".", value: "." }
  ]

  const operatorButtons = [
    { label: "÷", value: "÷" },
    { label: "×", value: "×" },
    { label: "-", value: "-" },
    { label: "+", value: "+" }
  ]

  const functionButtons = [
    { label: "AC", action: onClearClick },
    { label: "C", action: onClearEntryClick },
    { label: <ApperIcon name="Delete" size={20} />, action: onBackspaceClick }
  ]

  return (
    <div className="grid grid-cols-4 gap-3">
      {/* Function buttons row */}
      {functionButtons.map((button, index) => (
        <CalculatorButton
          key={`function-${index}`}
          variant="function"
          onClick={button.action}
          className={index === 0 ? "col-span-2" : ""}
        >
          {button.label}
        </CalculatorButton>
      ))}

      {/* Main keypad */}
      <div className="col-span-3 grid grid-cols-3 gap-3">
        {numberButtons.slice(0, 9).map((button) => (
          <CalculatorButton
            key={button.value}
            variant="number"
            onClick={() => onNumberClick(button.value)}
          >
            {button.label}
          </CalculatorButton>
        ))}
        
        {/* Zero and decimal in bottom row */}
        <CalculatorButton
          variant="number"
          onClick={() => onNumberClick("0")}
          size="wide"
        >
          0
        </CalculatorButton>
        
        <CalculatorButton
          variant="number"
          onClick={onDecimalClick}
        >
          .
        </CalculatorButton>
      </div>

      {/* Operator column */}
      <div className="flex flex-col gap-3">
        {operatorButtons.map((button) => (
          <CalculatorButton
            key={button.value}
            variant={activeOperation === button.value ? "equals" : "operator"}
            onClick={() => onOperatorClick(button.value)}
            className="h-[calc((100%-0.75rem*3)/4)]"
          >
            {button.label}
          </CalculatorButton>
        ))}
      </div>

      {/* Equals button */}
      <CalculatorButton
        variant="equals"
        onClick={onEqualsClick}
        size="large"
        className="col-span-4 h-16"
      >
        =
      </CalculatorButton>
    </div>
  )
}

export default CalculatorKeypad