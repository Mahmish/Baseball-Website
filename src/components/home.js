import React from 'react';
import Banner from '../components/banner';
import Choose from '../components/choose';
import About from '../components/about';
import Service from '../components/service';
import Merch from '../components/merch';
import Contact from '../components/contact';


export default function Home() {
  return (
    <div>
      <Banner/>
      <Choose/>
      <About/>
      <Service/>
      <Merch/>
      <Contact/>


    </div>
  )
}
