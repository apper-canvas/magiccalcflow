import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

const CalculatorButton = ({ 
  children, 
  onClick, 
  className,
  variant = "number",
  size = "default",
  disabled = false,
  ...props 
}) => {
  const baseStyles = "flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-ripple select-none"
  
  const variants = {
    number: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow-md focus:ring-primary active:bg-gray-100",
    operator: "bg-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-primary active:bg-blue-800",
    function: "bg-secondary hover:bg-slate-600 text-white shadow-md hover:shadow-lg focus:ring-secondary active:bg-slate-700",
    equals: "bg-accent hover:bg-amber-600 text-white shadow-lg hover:shadow-xl focus:ring-accent active:bg-amber-700"
  }

  const sizes = {
    default: "h-14 text-lg rounded-xl",
    large: "h-16 text-xl rounded-xl",
    wide: "h-14 text-lg rounded-xl col-span-2"
  }

const handleClick = (e) => {
    if (disabled) return
    
    // Framer Motion handles animation via whileTap prop
    // No manual DOM manipulation needed
    onClick?.(e)
  }

  return (
    <motion.button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      onClick={handleClick}
      whileHover={{ scale: disabled ? 1 : 1.02, brightness: 1.1 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default CalculatorButton