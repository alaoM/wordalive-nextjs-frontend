import React, {useState, useEffect} from 'react'
import { Header, SermonsDetails } from '../components/Sermon'
import { Footer, Navbar } from '../components/utils'


function Sermon() {
    const [sermon, setSermon] = useState([])

    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getSermon";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()    
                
            setSermon(data.sermons)
        }
        getPageData()
    }, []);

    return (
        <>
            <Navbar />
            <Header />
            <SermonsDetails data={sermon} />
            <Footer />
        </>
    )
}

export default Sermon