import React from 'react';
import './style/App.css'
import Header from './Nav-header-footer/Header';
import Footer from './Nav-header-footer/Footer';
import Block from './block/Block';
import Arrow from './img/Arrow 2 (Stroke).svg';
import Arrow2 from './img/Arrow 1.svg';
import Map from './map/map';

function App() {
  return (
    <div className='App'>
      <Header />,
      <section className='subtitleSection'>
        <div className='container'>
          <div className='mainSubtitle'>
            <div className='blockSubtitle'>
              <h1 className='mainTitle'>Rental vehicles in Cyprus</h1>
              <a href='#' className='btn'>see all tours <img src={Arrow} alt='' /></a>
            </div>
          </div>
        </div>
      </section>
      <h1 className='toursTitle'>Popular Tours</h1>  
      <div className='container'>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
        <div className='line'></div>
        <Block />
      </div>
      <a href='#' className='btn'>see all tours <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></a>
      <section className='reviewsSection'>
        <h1 className='reviewsTitle'>reviews</h1>
      </section>
      <Map />
      <Footer />,
    </div>
  );
}

export default App;