import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


export const Portfolio = ({ portfolio }) => {

    return (
        <>

            <div className="section section-padding">
                <div className="container">
                    <div className="section-title text-start">
                        <p className="subtitle">Portfolio</p>
                        <h4 className="title">Recent Activities</h4>
                    </div>
                    <div className="text-center filter-items left">
                        <h5 className="active portfolio-trigger" data-filter="*">All</h5>
                        {
                            portfolio.map((data) => (
                                <h5 className="portfolio-trigger " key={data.id} data-filter={`.${data.portfolio}`}>{data.portfolio}</h5>
                            ))
                        }
                    </div>


                    <div className="portfolio-filter row">
                        {

                             portfolio.slice(0, 12).map((data) => (
                                
                                    <div key={data.id} className={`col-lg-4 ${data.portfolio}`}>
                                        <div className="sigma_portfolio-item style-2">
                                            <img src={data?.image_path ? `/${data?.image_path}` : "/assets/img/ministries/style-2/1.jpg"} alt={data.title} />
                                            <div className="sigma_portfolio-item-content">
                                                <div className="sigma_portfolio-item-content-inner">
                                                    <h5>
                                                        <Link href="/portfolio">
                                                            <a>
                                                                <>
                                                                    {data.title}
                                                                </>
                                                            </a>
                                                        </Link>
                                                    </h5>
                                                </div>
                                                <a href=""><i className="far fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>

                                
                            ))
                        }
                    </div>
                </div>
            </div>

        </>
    )
}
