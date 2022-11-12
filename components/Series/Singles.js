import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const Singles = ({data}) => {
    return (
        <>
            <div id="singles" className="section section-padding pt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="subtitle">Singles Digest</p>
                        <h4 className="title">Things to knnow as singles</h4>
                    </div>
                    <div className="row">
                      
                        {
                            data.slice(0,6).map((res) => (
                                res.category === 'Singles Digest' &&
                                <div key ={res.id} className="col-lg-4 col-md-6">
                                <article className="sigma_post">
                                    <div className="sigma_post-thumb">
                                        <Link  href={`/series/${res.checker}`}>
                                        <a>
                                            <Image src={`/${res.image_path}`} alt="post" layout='responsive' width={720} height="400"/>
                                        </a>
                                        </Link>
                                       
                                    </div>
                                    <div className="sigma_post-body">
                                        <h5>
                                            <Link href={`/series/${res.checker}`}>
                                            <a >{res.topic}</a>
                                            </Link>
                                           </h5>
                                    </div>
                                </article>
                            </div>
                            ))
                        }                                       
                  
                    </div>
                </div>
            </div>

        </>
    )
}
