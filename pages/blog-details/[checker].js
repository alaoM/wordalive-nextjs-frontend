import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Header } from '../../components/blog'
import { convertDate, Navbar, truncate, reduceString } from '../../components/utils'

function Checker({ pageData }) {
    const [sermon, setSermon] = useState([])
    const [series, setSeries] = useState([])
    useEffect(() => {
        async function getPageData() {
            const apiURLEndPoint = "/api/getBlogPosts";
            const res = await fetch(apiURLEndPoint);
            const data = await res.json()
            setSeries(data.series)
            setSermon(data.sermons)

        }
        getPageData()
    }, []);
    return (
        <>
            <Navbar />
            <Header topic={pageData?.topic} bgImage={pageData.image_path}/>
            <div class="section sigma_post-single">
                <div class="container">
                    <div class="row">
                        <div className="col-lg-8">
                            <div className="post-detail-wrapper">
                                <div className="entry-content">
                                    <div className="sigma_post-meta">
                                    </div>
                                    <h4 className="entry-title text-center">{pageData?.topic}</h4>
                                    <a className="gallery-thumb">
                                        <img src={`/${pageData.image_path}`} alt={pageData?.topic} />
                                    </a>
                                    <div className="sigma_post-single-author-content"
                                        dangerouslySetInnerHTML={{ __html: pageData?.description }}
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
                                            series && series.map((res) => (
                                                <div key={res.id} className="col-md-6">
                                                    <article className="sigma_post">
                                                        <div className="sigma_post-thumb">
                                                            <Link href={`/series/${res?.checker}`}>
                                                                <a >

                                                                    <img src={`/${res?.image_path}`} alt={res?.category} />
                                                                </a>
                                                            </Link>


                                                        </div>
                                                        <div className="sigma_post-body">
                                                            <div className="sigma_post-meta">
                                                                <Link href={`/series/${res?.checker}`}>
                                                                    <a className="sigma_post-date">

                                                                        <i className="far fa-calendar" />{convertDate(res?.TimeStamp)}
                                                                    </a>

                                                                </Link>
                                                            </div>
                                                            <h5>
                                                                {reduceString(res?.topic, 28)}
                                                            </h5>
                                                            <Link href={`/series/${res?.checker}`}>
                                                                <a >
                                                                    <div
                                                                        dangerouslySetInnerHTML={{ __html: reduceString(res?.description, 68) }}
                                                                    />
                                                                </a>
                                                            </Link>


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

                        <div className="col-lg-4">
                            <div className="sidebar">
                                {/* About Author Start */}
                                <div className="sidebar-widget widget-about-author">
                                    <h5 className="widget-title">About Me</h5>
                                    <div className="widget-about-author-inner">
                                        <img src="/assets/img/about-me/dvse234-small.png" alt="author" />
                                        <h5>Adesoye Akeem Owolabi</h5>
                                        <p>"I am passionate about the Youth Ministry. You can also join me too"</p>
                                        <ul className="sigma_sm">
                                            <li>
                                                <a href="https://www.facebook.com/The-Word-Lives-International-Ministry-100719995846507/" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://youtube.com/channel/UCiVKWP0uIHbjVgVONm0Z0-g" target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="sidebar-widget widget-recent-posts">
                                    <h5 className="widget-title">Recent Posts</h5>
                                    {sermon && sermon.map((res) => (
                                        <article className="sigma_recent-post">
                                            <Link href={`/blog-details/${res.checker}`}>
                                                <a ><img src={`/${res.image_path}`} alt={res.topic} /></a>

                                            </Link>
                                            <div className="sigma_recent-post-body">
                                                <h6>
                                                    <Link href={`/blog-details/${res.checker}`}>
                                                        <a >{reduceString(res.topic, 30)}</a>
                                                    </Link>

                                                </h6>
                                                <Link href={`/blog-details/${res.checker}`}>
                                                    <a > <i className="far fa-calendar" />
                                                        {convertDate(res.TimeStamp)}</a>
                                                </Link>

                                            </div>
                                        </article>
                                    ))

                                    }
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>


        </>
    )
}

export default Checker

export async function getServerSideProps({ params }) {
    let url = process.env.WORD_ALIVE_URL_PROD;


    const apiURLEndPoint = `${url}/api/getBlogPosts`;
    const id = params.checker;

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
        }),
    };



    // Post Method
    const res = await fetch(apiURLEndPoint, options);
    const data = await res.json()

    if (data.result == undefined || data.status === "404") {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: {
            pageData: data.result[0],
        }
    }
}