import React from 'react'
import TopBar from '../components/Header/TopBar'
import MiddleHeader from '../components/Header/MiddleHeader'
import BottomHeader from '../components/Header/BottomHeader'
import Carousel from '../components/Carousel'

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
            </main>
        </div>
    </>
  )
}

export default Home