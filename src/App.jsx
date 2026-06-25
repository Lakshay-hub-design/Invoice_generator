import React from "react";
import { Toaster } from "sonner";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";


const App = () => {
  return (
    <>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
