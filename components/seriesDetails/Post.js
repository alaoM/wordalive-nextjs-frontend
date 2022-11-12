import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { convertDate, reduceString } from '../utils'

export const Post = ({ data, relatedPost, recentPost }) => {

    return (
        <>
            <div className="section sigma_post-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="post-detail-wrapper">
                                <div className="entry-content">
                                    <div className="sigma_post-meta">
                                    </div>
                                    <h4 className="entry-title text-center">{data.topic}</h4>
                                    <Link href={`/${data.image_path}`}>
                                        <a className="gallery-thumb">
                                            <img src={`/${data.image_path}`} alt={data.topic} />
                                        </a>
                                    </Link>

                                    <div
                                        dangerouslySetInnerHTML={{ __html: data.description }}

                                    />

                                </div>
                                {/* Post Pagination Start */}
                                <div className="section">
                                </div>
                                {/* Post Pagination End */}
                                {/* Related Posts Start */}
                                <div className="section">
                                    <h5>Related Posts</h5>
                                    <div className="row">
                                        {
                                            relatedPost.slice(0, 4).map((res) => (

                                                <div key={res.id} className="col-md-6">
                                                    <article className="sigma_post">
                                                        <div className="sigma_post-thumb">
                                                            <Link href={`/series#${res.category}`}>
                                                                <a >
                                                                    <img src={`/${res.image_path}`} className={res.topic} alt="post" />
                                                                </a>
                                                            </Link>

                                                        </div>
                                                        <div className="sigma_post-body">
                                                            <div className="sigma_post-meta">
                                                                <Link href={`/series#${res.category}`}>
                                                                    <a className="sigma_post-date"> <i className="far fa-calendar" />{convertDate(res.TimeStamp)}</a>
                                                                </Link>

                                                            </div>
                                                            <h5> <Link href={`/series#${res.category}`}><a>{reduceString(res.topic, 25)}...</a></Link>
                                                            </h5>
                                                            <div dangerouslySetInnerHTML={{ __html: reduceString(res.description, 150) }} />
                                                            <Link href={`/series#${res.category}`}><a>Read More</a></Link>
                                                        </div>
                                                    </article>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                {/* Related Posts End */}
                            </div>
                        </div>
                        {/* Sidebar Start */}
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar-widget widget-recent-posts">
                                    <h5 className="widget-title">Recent Posts</h5>
                                    {recentPost.slice(0, 6).map((res) => (
                                        <article key={res.id} className="sigma_recent-post">
                                            <Link href={`/blog-details/${res.checker}`}>
                                                <a ><Image src={`/${res.image_path}`} alt={res.topic} layout="responsive" height={10} width={10} /></a>

                                            </Link>
                                            <div className="sigma_recent-post-body">
                                                <h6>
                                                    <Link href={`/blog-details/${res.checker}`}>
                                                        <a >{res.topic}</a>

                                                    </Link>
                                                </h6>
                                                <Link href={`/blog-details/${res.checker}`}>
                                                    <a> <i className="far fa-calendar" />
                                                        {convertDate(res.TimeStamp)}</a>
                                                </Link>

                                            </div>
                                        </article>
                                    ))}

                                </div>
                                {/* Popular Feed End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
