import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



export const SermonsDetails = ({data}) => {


  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row count">      
            {
              data.map((res) => (
                <div key={res.id} className="col-lg-4 col-sm-6 justify-content-center wow fadeInDown" data-wow-delay="0.2s">
              <div className="sigma_sermon-box">
                <div className="sigma_video-popup-wrap">
                <Image src={`/${res.image_path}`}  alt={res.title} layout='responsive' width={700}  height={500}/>

                  {/* <img src={`/${res.image_path}`} alt={res.title} /> */}
                  <a href={`/${res.video_path}`} className="sigma_video-popup popup-youtube">
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="sigma_box">
                  <h4 className="title mb-0">
                  </h4><h6>{res.title}</h6>
                  <ul className="sigma_sermon-info mb-0">
                    <li>
                      <i className="far fa-user" />
                      Message by
                      <Link href='#' className="ms-2"><a>{`${res.preacher}`}</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              ))
            }  
             {
              data.map((res) => (
                <div key={res.id} className="col-lg-4 col-sm-6 justify-content-center wow fadeInDown" data-wow-delay="0.2s">
              <div className="sigma_sermon-box">
                <div className="sigma_video-popup-wrap">
                <Image src={`/${res.image_path}`}  alt={res.title} layout='responsive' width={700}  height={500}/>

                  {/* <img src={`/${res.image_path}`} alt={res.title} /> */}
                  <a href={`/${res.video_path}`} className="sigma_video-popup popup-youtube">
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="sigma_box">
                  <h4 className="title mb-0">
                  </h4><h6>{res.title}</h6>
                  <ul className="sigma_sermon-info mb-0">
                    <li>
                      <i className="far fa-user" />
                      Message by 
                      <Link href='#' className="ms-2"><a> {` ${res.preacher}`}</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              ))
            }      
            {
              data.map((res) => (
                <div key={res.id} className="col-lg-4 col-sm-6 justify-content-center wow fadeInDown" data-wow-delay="0.2s">
              <div className="sigma_sermon-box">
                <div className="sigma_video-popup-wrap">
                <Image src={`/${res.image_path}`}  alt={res.title} layout='responsive' width={700}  height={500}/>

                  <a href={`/${res.video_path}`} className="sigma_video-popup popup-youtube">
                    <i className="fas fa-play" />
                  </a>
                </div>
                <div className="sigma_box">
                  <h4 className="title mb-0">
                  </h4><h6>{res.title}</h6>
                  <ul className="sigma_sermon-info mb-0">
                    <li>
                      <i className="far fa-user" />
                      Message by 
                      <Link href='#' className="ms-2"><a> {` ${res.preacher}`}</a></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              ))
            }          
          </div>
          {/* Pagination Start */}
          <ul className="pagination mb-0" id="tab">
          </ul>
          {/* Pagination End */}
        </div>
      </div>

    </>
  )
}

