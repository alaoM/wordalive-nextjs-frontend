import React from 'react'

export const Preloader = () => {
    return (
        <><div className="preloader">
            <div className="page-loader-image"><img src="images/logo-default-186x50.png" alt="" width={186} height={50} />
            </div>
            <div className="page-loader-body">
                <div className="cssload-preloader cssload-loading"><span className="cssload-slice" /><span className="cssload-slice" /><span className="cssload-slice" /><span className="cssload-slice" /><span className="cssload-slice" /><span className="cssload-slice" /></div>
            </div>
        </div></>
    )
}

