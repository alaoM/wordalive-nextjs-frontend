import React from 'react'
import Image from 'next/image'
import Videoplayer from '../Videoplayer'
import ReactPlayer from 'react-player'
import Link from 'next/link'

export const Discipleship = ({ data }) => {
    return (
        <>
            {/* Discipleship Start */}
            <div id="dicipleship"  className="section section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="subtitle">Dicipleship</p>
                        <h4 className="title">Teachings from the word of God</h4>
                    </div>
                    <div className="row sigma_broadcast-video">
                        <div className="col-12 mb-5">
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-6">
                                    <div className="sigma_video-popup-wrap">
                       
                                        <Image src={`/assets/img/about-me/qjsk450.jpeg`} alt="video" layout="responsive" width={700}
                                                    height={500} />
                                        <a href="https://www.youtube.com/watch?v=KH1pcNUTa6U"
                                            className="sigma_video-popup popup-youtube">
                                            <i className="fas fa-play"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sigma_box m-0">
                                        <h4 className="title">A few words about us</h4>
                                        <p className="m-0">
                                            But as many as received him, to them gave he power to become
                                            the sons of God, even to them that believe on his name:
                                            Which were born, not of blood, nor of the will of the flesh,
                                            nor of the will of man, but of God.
                                        </p>
                                        <small className="text-right">John 1: 12-13</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {data.slice(0,12).map((res) => (
                            res.category === 'Discipleship' &&                       

                            <div key={res.id} className="col-lg-4 col-sm-6 mb-30">
                                <div className="sigma_video-popup-wrap">
                                    {/* <Image src={`/${res.image_path}`} className="cropped1" alt={res.topic} layout='responsive' width={700}  height={500}/> */}
                                    <ReactPlayer url={res.video_path}/>
                                    {/* <a href={res.video_path} className={`sigma_video-popup popup-sm ${ "popup-youtube" || "popup-video" ||   "gallery-thumb"}`} data-toggle="modal" data-target=".bd-example-modal-lg">
                                        <i className="fas fa-play" />
                                      
                                    </a> */}
                                </div>
                                <Link href={`/series/${res.checker}`}><a><h6 className="mb-0 mt-3">{res.topic}</h6></a></Link>
                                {/* <Videoplayer url={res.video_path}/> */}
                            </div> 
                            
                        ))}   

                    </div>
                   
                </div>
            </div>

        </>
    )
}
