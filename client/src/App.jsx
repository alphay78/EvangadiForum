// src/App.jsx
import React, { createContext, useState } from "react"; // Import createContext and useState
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import HomePage from "./pages/HomePage/HomePage";
import QuestionAndAnswerPage from "./pages/QuestionAndAnswerPage/QuestionAndAnswer";
import Four04 from "./components/Four04/Four04"
 

// Create the AppState context
export const AppState = createContext();

function App() {
  // Example state for user
  const [user, setUser] = useState(null);

  return (
    <AppState.Provider value={{ user, setUser }}>
      {" "}
      {/* Provide the state via AppState */}
      <div>
        <Header />
        {/* <HomePage /> */}
        <QuestionAndAnswerPage/>
        <Four04/>
        <Login /> 
        <Footer />
      </div>
    </AppState.Provider>
  );
}

export default App;
