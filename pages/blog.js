import React, { useEffect, useState } from 'react'
import { Header, Sidebar, Blogposts } from '../components/blog'
import { Footer, Navbar } from '../components/utils'

function Blog() {
    const [sermon, setSermon] = useState([])    
    const [series, setSeries] = useState([])   
    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getBlogPosts";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()
            setSeries(data.series)
            setSermon(data.sermons)

        }
        getPageData()
    }, []);
    return (
        <>
            <Navbar />
            <Header />
            <div className="section">
                <div className="container">
                    <div className="row">
                        
                        <Blogposts blogPosts={sermon} />
                        <Sidebar data={series} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blog