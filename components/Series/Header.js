import React from 'react'

export const Header = () => {
    return (
        <>
            <div className="sigma_subheader dark-overlay dark-overlay-2 wow slideInRight" data-wow-delay="0.2s" style={{ backgroundImage: 'url(assets/img/banner/3.jpg)' }}>
                <div className="container">
                    <div className="sigma_subheader-inner">
                        <div className="sigma_subheader-text">
                            <h1>Series</h1>
                            <p className="text-white mb-0">
                                Promoting the gospel of Christ throgh preaching and teaching.
                            </p>
                        </div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a className="btn-link" href="index.html">Home</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Series</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}
