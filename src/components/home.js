import React from 'react';
import Banner from './banner';
import Choose from './choose';
import About from './about';
import Service from './service';
import Merch from './merch';
import Contact from './contact';


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
