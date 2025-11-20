import React from "react"
import { motion } from "framer-motion"
import Calculator from "@/components/organisms/Calculator"
import ApperIcon from "@/components/ApperIcon"

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-100">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center py-8 px-4"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
          >
            <ApperIcon name="Calculator" className="w-6 h-6 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-gray-900"
          >
            CalcFlow
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg max-w-md mx-auto"
        >
          A clean, simple calculator for your everyday math needs. Designed for speed and accuracy.
        </motion.p>
      </motion.header>

      {/* Main Calculator */}
      <main className="flex-1 flex items-center justify-center px-4 pb-8">
        <Calculator />
      </main>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center py-6 px-4"
      >
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <ApperIcon name="Keyboard" className="w-4 h-4" />
            <span>Keyboard supported</span>
          </div>
          <div className="flex items-center gap-2">
            <ApperIcon name="Smartphone" className="w-4 h-4" />
            <span>Mobile friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <ApperIcon name="Zap" className="w-4 h-4" />
            <span>Lightning fast</span>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default Home