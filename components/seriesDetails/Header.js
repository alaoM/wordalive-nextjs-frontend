import React from 'react'
import Link from 'next/link'
export const Header = ({topic, bgImage}) => {  
    return (
        <div className="sigma_subheader dark-overlay dark-overlay-2" style={{ backgroundImage: bgImage==undefined? 'url(/assets/img/bg1.jpg)' :`url(/${bgImage})`  }}>
            <div className="container">
                <div className="sigma_subheader-inner">
                    <div className="sigma_subheader-text">
                        <h1>{topic}</h1>
                        <p className="text-white mb-0"> Promoting the gospel of Christ through Preaching and Teaching. </p>
                    </div>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link  href="#"><a className="btn-link">Home</a></Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

    )
}
