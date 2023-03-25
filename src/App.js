import SignIn from "./pages/signin";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Signup from './pages/signup'
import DonateNow from './pages/donator/DonateNow'
import CharityInfo from './pages/donator/CharityInfo'

const App = (props) => {
  return (
    <div className="w-[100vw]">
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/donatenow" element={<DonateNow />} />
            <Route path="/charitieinfo" element={<CharityInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
