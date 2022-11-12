import Link from 'next/link'
import React from 'react'
import { convertDate, truncate } from '../utils'

export const Sidebar = ({ data }) => {   
  
    return (

        <div className="col-lg-4">
            <div className="sidebar">
                {/* Popular Feed Start */}
                <div className="sidebar-widget widget-recent-posts">
                    <h5 className="widget-title">Recent Posts</h5>                   
                    {
                        data && data.map((res) => (
                            <article key={res.id} className="sigma_recent-post">
                                <Link href={`/series#${res.category}`}>
                                    <a >
                                        <img src={res.image_path} alt="post" /></a>

                                </Link >
                                <div className="sigma_recent-post-body">
                                    <h6>
                                       
                                        <Link href={`/series#${res.category}`}>
                                            <a>{truncate(res.topic, 10)}</a>
                                        </Link></h6>
                                    <Link href={`/series#${res.category}`}>
                                        <a>
                                            <>
                                                <i className="far fa-calendar" />
                                                {convertDate(res.TimeStamp)}
                                            </>
                                        </a>
                                    </Link>                                   
                                </div>
                            </article>
                        ))

                    }

                    {/*?php
                      endwhile;
                          endif;
                          ?*/}
                </div>
            </div>
        </div>


    )
}
