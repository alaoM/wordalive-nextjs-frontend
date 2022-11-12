import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Word Alive Ministry</title>
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/icon.svg" />
            </Head>
            {children}
        </>
    )
}

export default Layout