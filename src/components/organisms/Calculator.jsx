import React, { useEffect } from "react"
import { motion } from "framer-motion"
import { toast } from "react-toastify"
import CalculatorDisplay from "@/components/molecules/CalculatorDisplay"
import CalculatorKeypad from "@/components/molecules/CalculatorKeypad"
import useCalculator from "@/hooks/useCalculator"
import { calculationService } from "@/services/api/calculationService"

const Calculator = () => {
  const {
    display,
    inputNumber,
    inputDecimal,
    clear,
    clearEntry,
    backspace,
    performOperation,
    equals,
    operation,
    waitingForOperand
  } = useCalculator()

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e) => {
      e.preventDefault()
      
      // Numbers
      if (/[0-9]/.test(e.key)) {
        inputNumber(e.key)
      }
      // Decimal point
      else if (e.key === "." || e.key === ",") {
        inputDecimal()
      }
      // Operations
      else if (e.key === "+") {
        performOperation("+")
      }
      else if (e.key === "-") {
        performOperation("-")
      }
      else if (e.key === "*") {
        performOperation("×")
      }
      else if (e.key === "/") {
        performOperation("÷")
      }
      // Equals
      else if (e.key === "=" || e.key === "Enter") {
        equals()
      }
      // Clear
      else if (e.key === "Escape") {
        clear()
      }
      // Backspace
      else if (e.key === "Backspace") {
        backspace()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [inputNumber, inputDecimal, performOperation, equals, clear, backspace])

  const handleNumberClick = (number) => {
    inputNumber(number)
  }

  const handleOperatorClick = (operator) => {
    performOperation(operator)
  }

  const handleEqualsClick = async () => {
    const currentDisplay = display
    equals()
    
    // Save calculation to history (optional feature)
    try {
      if (operation && display !== "Error") {
        const expression = `${display} ${operation} = ${currentDisplay}`
        await calculationService.saveCalculation(expression, currentDisplay)
      }
    } catch (error) {
      // Silent fail - don't interrupt calculation flow
      console.warn("Failed to save calculation:", error)
    }
  }

  const handleClearClick = () => {
    clear()
    toast.success("Calculator cleared", { position: "top-right" })
  }

  const handleClearEntryClick = () => {
    clearEntry()
  }

  const handleBackspaceClick = () => {
    backspace()
  }

  const handleDecimalClick = () => {
    inputDecimal()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="w-full max-w-sm mx-auto bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
    >
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <CalculatorDisplay value={display} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <CalculatorKeypad
            onNumberClick={handleNumberClick}
            onOperatorClick={handleOperatorClick}
            onEqualsClick={handleEqualsClick}
            onClearClick={handleClearClick}
            onClearEntryClick={handleClearEntryClick}
            onBackspaceClick={handleBackspaceClick}
            onDecimalClick={handleDecimalClick}
            activeOperation={operation}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Calculator