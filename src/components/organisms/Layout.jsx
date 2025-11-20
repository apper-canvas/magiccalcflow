import React from "react"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gray-100">
      <Outlet />
    </div>
  )
}

export default Layout