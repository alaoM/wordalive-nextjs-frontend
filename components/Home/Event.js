import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

export const Event = ({ latestsermon, latestEvent }) => {
  
 
   return (
        <>
            {/* Sermons Start */}

            <div className="section section-padding secondary-bg">
                <div className="container">
                    <div className="row sigma_sermon-box-wrapper mt-1">
                        <div className="col-lg-6">
                            <div className="sigma_sermon-box">
                                <div className="sigma_box">
                                    <span className="subtitle">Our Next Event</span>
                                    <h4 className="title mb-0">
                                        <a href="#">{latestEvent?.title}</a>
                                    </h4>
                                    <div className="sigma_sermon-info">
                                        <div className="sigma_sermon-date">
                                            <span className="days" />
                                            <div className="row">
                                                <div className="col p-0 m-0">
                                                    <p className="hours"></p>
                                                </div>
                                                <div className="col p-0 m-0">
                                                    <p className="minutes"></p>
                                                </div>
                                                <div className="col p-0 m-0">
                                                    <p className="seconds"></p>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="sigma_sermon-descr m-0">
                                            <li>
                                                <i className="far fa-clock" />
                                                <div id="time">{latestEvent?.date}
                                                </div></li>
                                            <li>
                                                <i className="far fa-map-marker-alt" />
                                                {latestEvent?.location}
                                            </li>
                                        </ul>
                                    </div>                                  
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="sigma_sermon-box">
                                <div className="sigma_box">
                                    <span className="subtitle">Latest Sermons</span>
                                    <h4 className="title mb-0">
                                        <a href="#">{latestsermon?.title}</a>
                                    </h4>
                                    <ul className="sigma_sermon-info mb-0">
                                        <li>
                                            <i className="far fa-user" />
                                            Message From
                                            <a href="#" className="ms-2"><u>{latestsermon?.date}</u></a>
                                        </li>
                                        <li className="mt-0 ms-4">
                                            <i className="far fa-calendar-check" />
                                            {latestsermon?.preacher}
                                        </li>
                                    </ul>
                                    <div className="sigma_audio-player row">
                                        <div className="audio-wrapper" id="player-container">

                                            <ReactAudioPlayer
                                                className="col-12"
                                                src={latestsermon?.video_path}
                                                autoPlay
                                                controls
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sermons End */}
        </>
    )
}
