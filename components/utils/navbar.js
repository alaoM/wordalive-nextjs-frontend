import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <aside className="sigma_aside sigma_aside-right sigma_aside-right-panel sigma_aside-bg">
        <div className="sidebar">
          <div className="sidebar-widget widget-logo">
            {/* right sise nav  no need for resizing*/}
            <Image src="/assets/img/logo.png" className="mb-30" alt="img" layout='fill' />
          </div>
        </div>
      </aside>
      <div className="sigma_aside-overlay aside-trigger-right" />
      <aside className="sigma_aside sigma_aside-left">
        <Link href="/">
          <a className="navbar-brand"> <Image src="/assets/img/logo.png" alt="logo" height={170} width={120} /> </a>
        </Link>



        <ul>
          <li className="menu-item menu-item-has-children">
            <Link href="/">
              <a >Home</a>
            </Link>

          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="/series">
              <a>Series</a>
            </Link>
            <ul className="sub-menu">
              <li className="menu-item">
                <Link href="/series#discipleship">
                  <a>Discipleship</a>
                </Link>

              </li>
              <li className="menu-item">
                <Link href="/series#married">
                  <a>Married</a>
                </Link>

              </li>
              <li className="menu-item">
                <Link href="/series#singles">
                  <a>Singles Digest</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="/sermon">
              <a >Sermon</a>
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="/portfolio">
              <a >Mission &amp; Outreach</a>
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="/about">
              <a >About Us</a>
            </Link>
          </li>
          <li className="menu-item menu-item-has-children">
            <Link href="/blog">
              <a >Blog</a>
            </Link>
          </li>
        </ul>
      </aside>
      <div className="sigma_aside-overlay aside-trigger-left" />

      <header className="sigma_header header-2 can-sticky">

        <div className="sigma_header-middle">
          <nav className="navbar">

            <div className="sigma_header-controls style-2">
              <ul className="sigma_header-controls-inner">

                <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
                {/* Mobile Toggler */}
                <li className="aside-toggler style-2 aside-trigger-left">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </li>
              </ul>
            </div>
            <ul className="navbar-nav">
              <li className="menu-item menu-item-has-children">
                <Link href="/">
                  <a >Home</a>
                </Link>

              </li>
              <li className="menu-item menu-item-has-children">
                <Link href="/series">
                  <a>Series</a>
                </Link>

                <ul className="sub-menu">
                  <li className="menu-item"> <Link href="/series#discipleship"><a>Discipleship</a></Link> </li>
                  <li className="menu-item"> <Link href="/series#married"><a>Married</a></Link> </li>
                  <li className="menu-item"> <Link href="/series#singles"><a>Singles Digest</a></Link> </li>

                </ul>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href="/sermon">
                  <a >Sermon</a>
                </Link>

              </li>
              <li className="menu-item menu-item-has-children">
                <Link href="/portfolio">
                  <a >Mission   &amp; Outreach</a>
                </Link>

              </li>
              <li className="menu-item menu-item-has-children">
                <Link href="/about">
                  <a >About Us</a>
                </Link>
              </li>
              <li className="menu-item menu-item-has-children">
                <Link href="/blog">
                  <a >Blog</a>
                </Link>
              </li>
            </ul>

            <div className="sigma_header-controls sigma_header-button">
              <a href="tel:+2347052023523" className="sigma_header-contact">
                <i className="fal fa-phone" />
                <div className="sigma_header-contact-inner">
                  <span>Get Support</span>
                  <h6>+234 705 202 3523
                  </h6>
                </div>
              </a>

              <a className="sigma_btn-custom" onClick={() => router.push("/about#contact-us")}> Leave a Message
                <span />
                <span />
              </a>


            </div>

            <div className="sigma_header-controls style-1">
              <a href="#" className="sigma_search-trigger"> <i className="flaticon-magnifying-glass" /> </a>
            </div>
          </nav>
        </div>

      </header>



    </>
  )
};
