import React from 'react'
import Link from 'next/link'
import { truncate } from '../utils'

export const Blogposts = ({ blogPosts }) => {    

    return (
        <>
            <div className="col-lg-8">
                <div className="row count">

                    {blogPosts && blogPosts.map((res) => (
                        <div key={res.id} className="col-md-6">
                            <article className="sigma_post">
                                <div className="sigma_post-thumb">
                                    <Link href={`/blog-details/${res.checker}`}>
                                    <a >
                                        <img src={res.image_path} alt={res.topic} />
                                    </a>
                                    </Link>
                                    
                                </div>
                                <div className="sigma_post-body">
                                    <h6>
                                        <Link href={`/blog-details/${res.checker}`}>
                                            <a >{res.topic}</a>
                                        </Link>
                                    </h6>
                                    <div className="sigma_post-single-author">
                                        <div className="sigma_post-single-author-content"
                                            dangerouslySetInnerHTML={{ __html: truncate(res.description, 50) }}
                                        />                                     

                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}                  

                   
                </div>
                
                <ul className="pagination mb-0" id="tab">
                </ul>
                <ul className="pagination mb-0" id="tab">
                </ul>
            </div>

        </>
    )
}
