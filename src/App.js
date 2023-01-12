import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditForm from "./components/EditForm";
import StaffList from "./components/StaffList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StaffList />} />
        <Route path="/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
