import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const ErrorView = ({ error, onRetry }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-gray-100 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md space-y-6 bg-white rounded-2xl p-8 shadow-xl"
      >
        <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto">
          <ApperIcon name="AlertTriangle" className="w-8 h-8 text-error" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">Something went wrong</h2>
          <p className="text-gray-600">{error || "An unexpected error occurred while loading the calculator."}</p>
        </div>

        {onRetry && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onRetry}
            className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <ApperIcon name="RotateCcw" className="w-4 h-4" />
            Try Again
          </motion.button>
        )}
      </motion.div>
    </div>
  )
}

export default ErrorView