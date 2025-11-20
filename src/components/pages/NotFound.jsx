import React from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ApperIcon from "@/components/ApperIcon"
import Button from "@/components/atoms/Button"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-100 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md space-y-8"
      >
        {/* 404 Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mx-auto"
        >
          <ApperIcon name="Calculator" className="w-12 h-12 text-error" />
        </motion.div>

        {/* Error Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700">Page Not Found</h2>
          <p className="text-gray-600 leading-relaxed">
            Oops! It looks like this page doesn't exist. The calculation seems to have gone wrong somewhere.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate("/")}
            className="w-full"
          >
            <ApperIcon name="Calculator" className="w-5 h-5 mr-2" />
            Back to Calculator
          </Button>
          
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="w-full"
          >
            <ApperIcon name="ArrowLeft" className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </motion.div>

        {/* Help Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500"
        >
          <p>Need help? Try using our calculator or check the URL for typos.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default NotFound