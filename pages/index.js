import React, { useEffect, useState } from 'react'

import { Header, Portfolio, Event, About } from '../components/Home'
import Sections from '../components/Home/Sections';
import { Footer, Navbar } from '../components/utils'

function Home() {
    const [latestEvent, setLatestEvent] = useState([]);
    const [latestSermon, setLatestSermon] = useState([]);
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getHomePage";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()
            setPortfolio(data.portfolio)
            setLatestEvent(data.events[0])
            setLatestSermon(data.sermons[0])
        }
        getPageData()
    }, []);


    return (
        <>
            <Navbar />
            <Header />
            <Event latestsermon={latestSermon} latestEvent={latestEvent} />
            <Sections />
            <About />
            {<Portfolio portfolio={portfolio} />}
            <Footer />
        </>
    )
}

export default Home