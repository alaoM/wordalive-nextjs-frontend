import React from 'react'
import Link from 'next/link'


export const Header = () => {
    return (
        <>

            {/* Banner Start */}
            <div className="sigma_banner banner-3">
                <div className="sigma_banner-slider">
                    {/* Banner Item Start */}
                    <div className="light-bg sigma_banner-slider-inner bg-cover bg-center bg-norepeat" style={{ backgroundImage: 'url("/assets/img/banner/3.jpg")' }}>
                        <div className="sigma_banner-text">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <h1 className="title">Word Alive Ministry</h1>
                                        <p className="blockquote mb-0 bg-transparent">Promoting the gospel of Christ through Preaching and Teaching </p>
                                        <div className="section-button d-flex align-items-center">
                                            <Link href="/about">
                                               
                                                    <a className="sigma_btn-custom">About Us <i className="far fa-arrow-right" />
                                                    <>
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </>
                                                </a>
                                            </Link>
                                            <Link href="/sermon">
                                                <a className="ms-3 sigma_btn-custom white">Sermons <i className="far fa-arrow-right" />
                                                    <>
                                                        <span />
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Banner Item End */}
                    {/* Banner Item Start */}


                    <div className="light-bg sigma_banner-slider-inner bg-cover bg-center dark-overlay dark-overlay-2 bg-norepeat" style={{ backgroundImage: 'url("assets/img/about-me/qjsk450.jpeg")' }}>
                        <div className="sigma_banner-text">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 text-center">
                                        <h1 className="text-white title">The Word Lives International Ministry</h1>
                                        {/*  <p className="mb-0">
                                            Promoting the gospel of Christ through Preaching and Teaching
                                        </p> */}
                                        <br />
                                        <Link href="/" >
                                            <a className="sigma_btn-custom section-button">
                                                Rev.d &amp; Mrs. Adesoye Owolabi
                                                {/* <i className="far fa-arrow-right" /> */}
                                                <span />
                                                <span />
                                                <span />
                                                <span />
                                            </a>

                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Banner Item End */}
                </div>
            </div>
            {/* Banner End */}


        </>


    )
}
