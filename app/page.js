"use client"

import HomePage from "./Components/HomePage"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Page4 from "./Components/Page4"
import Page5 from "./Components/Page5"
import FaqBox from "./Components/FaqBox"
import Footer from "./Components/Footer"

export default function Home() {
  return (
    <>
      <HomePage />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <Page2 />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <Page3 />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <Page4 />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <Page5 />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <FaqBox />

      <div className="seperation bg-black opacity-80 h-2"></div>

      <Footer />

    </>
  )
}