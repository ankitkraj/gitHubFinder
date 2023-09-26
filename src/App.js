import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Error from "./components/pages/Error";
import { GitHubProvider } from "./components/context/github/GitHubContext";
import { AlertContextProvider } from "./components/context/alert/AlertContext";
import UserProfile from "./components/pages/UserProfile";

function App() {
  return (
    <AlertContextProvider>
      <GitHubProvider>
        <Router>
          <div className="flex flex-col justify-between h-screen">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/user/:login" element={<UserProfile />} />
              <Route path="/About" element={<About />} />
              <Route path="/Error" element={<Error />} />
              <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </GitHubProvider>
    </AlertContextProvider>
  );
}

export default App;
