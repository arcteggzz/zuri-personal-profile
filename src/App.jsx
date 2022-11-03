import './App.css';
import Profile from "./Components/Profile"
import Links from "./Components/Links"
import Footer from "./Components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Contact from "./Contact"

function App() {
  return (
    <div className="app">
      <BrowserRouter >
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Profile />
                <Links />
                <Footer />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
