import React, { forwardRef } from "react"
import { motion } from "framer-motion"
import { cn } from "@/utils/cn"

const Button = forwardRef(({ 
  children, 
  className, 
  variant = "default",
  size = "default",
  disabled = false,
  onClick,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed btn-ripple"
  
  const variants = {
    default: "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm hover:shadow-md focus:ring-primary",
    primary: "bg-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-primary",
    secondary: "bg-secondary hover:bg-slate-600 text-white shadow-md hover:shadow-lg focus:ring-secondary",
    accent: "bg-accent hover:bg-amber-600 text-white shadow-md hover:shadow-lg focus:ring-accent",
    ghost: "hover:bg-gray-100 text-gray-900 focus:ring-primary",
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    default: "h-12 px-4 text-base",
    lg: "h-14 px-6 text-lg",
    xl: "h-16 px-8 text-xl",
  }

  const handleClick = (e) => {
    if (disabled) return
    
    // Add press animation class
    e.target.classList.add("btn-press")
    setTimeout(() => {
      e.target.classList.remove("btn-press")
    }, 100)
    
    onClick?.(e)
  }

  return (
    <motion.button
      ref={ref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled}
      onClick={handleClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = "Button"

export default Button