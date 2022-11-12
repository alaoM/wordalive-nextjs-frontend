import React, { useEffect, useState } from 'react'
import { Discipleship, Header, Married, Singles } from '../components/Series'
import { Footer, Navbar } from '../components/utils'

function Series() {
    const [discipleship, setDiscipleship] = useState([]);
    const [singles, setMarried] = useState([]);
    const [married, setSingles] = useState([])
    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getSeries";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()
            setDiscipleship(data.series)
            setMarried(data.series)
            setSingles(data.series)

        }
        getPageData()
    }, []);


    return (
        <>
            <Navbar />
            <Header />
            {<Discipleship data={discipleship} />}
            {<Married data={married} />}
            {<Singles data={singles} />}
           
            <Footer />
        </>
    )
}

export default Series