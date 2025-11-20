import { motion } from "framer-motion"
import ApperIcon from "@/components/ApperIcon"

const Empty = ({ title = "No Data", description = "There's nothing here yet.", actionLabel = "Get Started", onAction }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center max-w-md mx-auto space-y-6 p-8"
    >
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
        <ApperIcon name="Calculator" className="w-8 h-8 text-gray-400" />
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      {onAction && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAction}
          className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200"
        >
          {actionLabel}
        </motion.button>
      )}
    </motion.div>
  )
}

export default Empty