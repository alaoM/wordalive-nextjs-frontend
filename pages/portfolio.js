import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Footer, Navbar } from '../components/utils'

function Portfolio() {
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getSermon";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()

            setPortfolio(data.portfolio)
        }
        getPageData()
    }, []);
    return (
        <>
            <Navbar />
            <>
                <div className="sigma_subheader dark-overlay dark-overlay-2 wow slideInRight" data-wow-delay="0.2s" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }}>
                    <div className="container">
                        <div className="sigma_subheader-inner">
                            <div className="sigma_subheader-text">
                                <h1>Portfolio</h1>
                                <p className="text-white mb-0"> Archives of what we have been doing in the past. </p>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/"><a className="btn-link" >Home</a></Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Portfolio</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* partial */}
                {/* Categories Start */}
                <div className="section section-padding">
                    <div className="container">
                        <div className="text-center filter-items">
                            <h5 className="active portfolio-trigger" data-filter="*">All Images</h5>
                            <h5 className="portfolio-trigger" data-filter=".campus">Campus Outreach</h5>
                            <h5 className="portfolio-trigger" data-filter=".village">Village and Mission Outreach</h5>
                            <h5 className="portfolio-trigger" data-filter=".orphanage">Visit to Orphanage</h5>
                        </div>
                        <div className="portfolio-filter row">                           
                            {
                                portfolio.slice(0,20).map((res) => (
                                    <div key={res.id} className={`col-lg-4 ${res.portfolio}`}>
                                        <div className="sigma_portfolio-item">
                                            <img src={`/${res.image_path}`} alt={res.portfolio} layout="responsive" height={6} width={10} />
                                            <div className="sigma_portfolio-item-content">
                                                <div className="sigma_portfolio-item-content-inner">
                                                    <h5 className="text-white"> {res.title} </h5>
                                                    <p>{res.subtitle}</p>
                                                </div>                                                

                                            </div>
                                        </div>
                                    </div>                           
                                ))
                            }  
                             
                                                
                        </div>
                    </div>
                </div>
            </>

            <Footer />
        </>


    )
}

export default Portfolio