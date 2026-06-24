import React from 'react'
import { Toaster } from "sonner";
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <>
      <Dashboard />
      <Toaster richColors position="top-right" />
    </>
  )
}

export default App
