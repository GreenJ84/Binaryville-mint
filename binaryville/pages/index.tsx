import React from 'react'
import About from '../compnents/about/About';
import FAQ from '../compnents/faq/FAQ';
import Roadmap from '../compnents/roadmap/Roadmap';
import Team from '../compnents/team/Team';

const Home = () => {
  return (
    <div >
      <About />
      <Roadmap />
      <Team />
      <FAQ />
    </div>
  )
}

export default Home;
