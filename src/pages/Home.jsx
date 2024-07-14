import React from 'react'
import TopBar from '../components/Header/TopBar'
import MiddleHeader from '../components/Header/MiddleHeader'
import BottomHeader from '../components/Header/BottomHeader'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Banner from '../components/Banner'
import NewArrivals from '../components/NewArrivals'
import CallToAction from '../components/CallToAction'

function Home() {
  return (
    <>
        <div className="page-wrapper">
            <header className="header header-intro-clearance header-4">
                <TopBar/>
                <MiddleHeader/>
                <BottomHeader/>
            </header>

            <main className="main">
              <Carousel/>
              <Category/>
              <div className="mb-4"></div>
              <Banner/>
              <div className="mb-3"></div>
              <NewArrivals/>
              <div className="mb-6"></div>
              <CallToAction/>
            </main>
        </div>
    </>
  )
}

export default Home