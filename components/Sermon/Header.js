import React from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <>
            <div className="sigma_subheader dark-overlay dark-overlay-2 wow slideInLeft" data-wow-delay="0.2s" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }}>
                <div className="container">
                    <div className="sigma_subheader-inner">
                        <div className="sigma_subheader-text">
                            <h1>Sermon</h1>
                            <p className="text-white mb-0">
                                Promoting the Gospel of Christ through daily teachings.
                            </p>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                    <a className="btn-link" href="index.php">Home</a>
                                    </Link>                                    
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Sermon</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
