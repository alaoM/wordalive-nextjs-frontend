import React from 'react'

import dynamic from 'next/dynamic'
import Link from 'next/link';
export const About = () => {

    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
    return (
        <>
            {/* About Start */}
            <section className="section section-padding primary-light-bg wow fadeInLeft" data-wow-duration="0.2s">
                <div className="container">
                    <div className="sigma_why-us">
                        <div className="section-title section-title-2 text-center">
                            <p className="subtitle">About Us</p>
                            <h4 className="title">
                                We are Community That Believes in the power of <u>God</u> to:
                            </h4>
                        </div>
                        <p>	To empower young people to live as disciples of Jesus Christ in our world today. </p>
                        <p>To help young people learn what it means to follow Jesus Christ and to live as his disciples today, and empowering them to serve others and to work toward a world built on the visions and values of the reign of God.
                        </p>
                        <p>To draw Young people to responsible participation in the life, mission, and work of the Kingdom.</p>
                        <p />
                    </div>
                    <div className="text-center">
                        <Link href="/about" >
                            <a className="sigma_btn-custom">
                                <>
                                    Read More 
                                    <i className="far fa-arrow-right" />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </>
                            </a>
                        </Link>

                    </div>
                </div>
            </section>

            <div className="section section-lg bg-cover bg-norepeat bg-center" style={{ backgroundImage: 'url(assets/img/bg1.jpg)' }}>
                <div className="section d-flex align-items-center justify-content-center">
                    <a href="https://www.youtube.com/watch?v=KpEW7VVJ_M4" className="sigma_video-popup popup-youtube">
                        <i className="fas fa-play" />
                    </a>
                </div>
            </div>

            {/* About End */}


        </>
    )
}

