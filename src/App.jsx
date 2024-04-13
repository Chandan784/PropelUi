import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatForYou from "./components/WhatForYou";
import Methodology from "./components/Methodology";
import FAQuestions from "./components/FAQuestions";
import FooterIntro from "./components/FooterIntro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Header />
        <div className=" mt-8">
          <Courses />
          <WhatForYou />
          <Methodology />
          <WhatForYou />
          <FAQuestions />
          <FooterIntro />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
