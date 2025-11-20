import { useState, useCallback } from "react"

const useCalculator = () => {
  const [display, setDisplay] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = useCallback((num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === "0" ? String(num) : display + num)
    }
  }, [display, waitingForOperand])

  const inputDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay("0.")
      setWaitingForOperand(false)
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".")
    }
  }, [display, waitingForOperand])

  const clear = useCallback(() => {
    setDisplay("0")
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }, [])

  const clearEntry = useCallback(() => {
    setDisplay("0")
  }, [])

  const backspace = useCallback(() => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay("0")
    }
  }, [display])

  const performOperation = useCallback((nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      if (newValue === "Error") {
        setDisplay("Error")
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(true)
        return
      }

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }, [display, previousValue, operation])

  const calculate = useCallback((firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue
      case "-":
        return firstValue - secondValue
      case "×":
        return firstValue * secondValue
      case "÷":
        return secondValue !== 0 ? firstValue / secondValue : "Error"
      default:
        return secondValue
    }
  }, [])

  const equals = useCallback(() => {
    const inputValue = parseFloat(display)

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation)
      
      if (newValue === "Error") {
        setDisplay("Error")
        setPreviousValue(null)
        setOperation(null)
        setWaitingForOperand(true)
        return
      }

      setDisplay(String(newValue))
      setPreviousValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }, [display, previousValue, operation, calculate])

  const formatDisplay = useCallback((value) => {
    if (value === "Error") return value
    
    const num = parseFloat(value)
    if (isNaN(num)) return "0"
    
    // Handle very large numbers
    if (Math.abs(num) > 999999999999) {
      return num.toExponential(3)
    }
    
    // Handle very small numbers
    if (Math.abs(num) < 0.000001 && num !== 0) {
      return num.toExponential(3)
    }
    
    // Format regular numbers
    const formatted = num.toString()
    
    // Add commas for large integers
    if (Number.isInteger(num) && Math.abs(num) >= 1000) {
      return num.toLocaleString()
    }
    
    return formatted
  }, [])

  return {
    display: formatDisplay(display),
    inputNumber,
    inputDecimal,
    clear,
    clearEntry,
    backspace,
    performOperation,
    equals,
    operation,
    waitingForOperand
  }
}

export default useCalculator