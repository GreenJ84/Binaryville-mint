import React from 'react'
import About from '../compnents/about/About';
import FAQ from '../compnents/faq/FAQ';
import Roadmap from '../compnents/roadmap/Roadmap';
import Team from '../compnents/team/Team';

const css = require("../compnents/home.module.css")

const Home = () => {
  return (
    <div className={ css.main }>
      <About />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  )
}

export default Home;
