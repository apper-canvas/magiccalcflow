import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/utils/cn"

const CalculatorDisplay = ({ value, className }) => {
  return (
    <div className={cn(
      "bg-gray-50 rounded-xl p-6 mb-4 border border-gray-100",
      "shadow-inner",
      className
    )}>
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="text-right"
        >
          <div className={cn(
            "text-4xl font-bold text-gray-900 calculator-display",
            "min-h-[3rem] flex items-center justify-end",
            value.length > 10 && "text-3xl",
            value.length > 15 && "text-2xl",
            value === "Error" && "text-error"
          )}>
            {value}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default CalculatorDisplay