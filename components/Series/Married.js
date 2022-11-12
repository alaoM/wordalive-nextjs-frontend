import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { reduceString } from '../utils'

export const Married = ({ data }) => {
    return (
        <>
            {/* Marriage Start */}
            <div id="married" className="section section-padding primary-light-bg pt-5">
                <div className="container">
                    <div className="section-title text-center">
                        <p className="subtitle">Marriage</p>
                        <h4 className="title">What you should know as married couple</h4>
                    </div>
                    <div className="row">
                        {/* Article Start */}
                        {
                            data.slice(0, 12).map((data) => (
                                data.category === 'Married' &&
                                <div key={data.id} className="col-lg-4 col-md-6">
                                    <article className="sigma_post">
                                        <div className="sigma_post-thumb">
                                            <Link href={`/series/${data.checker}`}>
                                                <a >
                                                    <Image src={`/${data.image_path}`} className="cropped2 mb-0" alt="post" layout='responsive'
                                                        width={700}
                                                        height={400} />
                                                </a>
                                            </Link>

                                        </div>
                                        <div className="sigma_post-body mt-0">
                                        <h5>
                                                <Link href={`/series/${data.checker}`}>
                                                    <a>{reduceString(data.topic, 30)}...</a>
                                                </Link>
                                            </h5>
                                            <div className="sigma_post-meta">
                                                <div className="me-3">
                                                    {
                                                        data.video_path != "" ? <i className="fas fa-angle-double-right" /> : <i className="fas fa-book" />
                                                    }
                                                    <Link href={`/series/${data.checker}`} >
                                                        <a className="sigma_post-category">{reduceString(data.description, 100)}...</a>
                                                    </Link>
                                                </div>
                                            </div>
                                           

                                            <div className="sigma_post-single-author">
                                                <div className="sigma_post-single-author-content">
                                                    By
                                                    <p>{data?.preacher}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )
                            )}

                        {/* Article End */}
                    </div>
                </div>
            </div>
            {/* Marriage End */}

        </>
    )
}

