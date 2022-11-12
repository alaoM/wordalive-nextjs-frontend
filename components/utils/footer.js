import Image from "next/image"
import Script from "next/Script"

export const Footer = () => {
  return (
    <>
      <div className="section mb-negative p-0">
        <div className="container">
          <div className="sigma_box pb-0 m-0">
            <div className="row">
              <div className="col-md-3">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="fa fa-church" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5>Mission and Outreach</h5>
                    <p>
                      Reach out to the unsaved
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="fa fa-bullhorn" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5>Sermons</h5>
                    <p>
                      Preach the Gospel of Christ till last breath
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="fa fa-bible" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5>Books</h5>
                    <p>
                      Increase your wealth of Knowledge by reading
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="sigma_icon-block icon-block-3">
                  <div className="icon-wrapper">
                    <i className="fa fa-calendar-day" />
                  </div>
                  <div className="sigma_icon-block-content">
                    <h5>Events</h5>
                    <p>
                      What can be here, i dont know
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="sigma_footer footer-2 bg-cover bg-center bg-transparent light-overlay" style={{ backgroundImage: 'url(/assets/img/footer.jpg)' }}>
        {/* Middle Footer */}
        <div className="sigma_footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 footer-widget">
                <div className="sigma_footer-logo justify-content-center align-items-center">
                  <Image src="/assets/img/logo.png" alt="logo" className="justify-content-center" layout="responsive" width={7} height={10} />
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 footer-widget">
                <h5 className="widget-title">Useful Links</h5>
                <ul>
                  <li> <a href="sermons.php">Sermons</a> </li>
                  <li> <a href="portfolio.php">Missions and Outreach</a> </li>
                  <li> <a href="about-us.php">About Us</a> </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 footer-widget">
                <h5 className="widget-title">Others</h5>
                <ul>
                  <li> <a href="series.php">Series</a> </li>
                  <li> <a href="about-us.php#details">Donation</a> </li>
                  <li> <a href="about-us.php#contact-us">Contact Us</a> </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 d-none d-lg-block footer-widget widget-recent-posts">
                <h5 className="widget-title">Contact Us</h5>
                <div className="d-flex align-items-center justify-content-start">
                  <i className="far fa-phone custom-primary me-3" />
                  <span><a href="tel: +234 806 453 6045">+234 806 453 6045</a></span>
                </div>
                <div className="d-flex align-items-center justify-content-start">
                  <i className="far fa-phone custom-primary me-3" />
                  <span><a href="tel: +234 705 202 3523">+234 705 202 3523</a></span>
                </div>
                <div className="d-flex align-items-center justify-content-start mt-2">
                  <i className="far fa-envelope custom-primary me-3" />
                  <a href="mailto: anikayo4ever@gmail.com" /><span>anikayo4ever@gmail.com</span>
                </div>
                <ul className="sigma_sm square light justify-content-start mt-4">
                  <li>
                    <a href="portfolio.php" target="_blank" rel="noopener noreferrer">
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
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="sigma_footer-bottom">
          <div className="container-fluid justify-content-center">
            <div className="sigma_footer-copyright">
              <p> Copyright © Word Alive - <a className="custom-primary" /> </p>
            </div>
          </div>
        </div>
      </footer>


      <Script id="jquery" dangerouslySetInnerHTML={{ __html: process.env.jquery }}></Script>
      <Script id="popper" dangerouslySetInnerHTML={{ __html: process.env.popper }}></Script>
      <Script id="bootstrap" dangerouslySetInnerHTML={{ __html: process.env.bootstrap }}></Script>
      <Script id="imagesLoaded" dangerouslySetInnerHTML={{ __html: process.env.imagesLoaded }}></Script>
      <Script id="magnific" dangerouslySetInnerHTML={{ __html: process.env.magnific }}></Script>
      <Script id="countdown" dangerouslySetInnerHTML={{ __html: process.env.countdown }}></Script>
      <Script id="waypoints" dangerouslySetInnerHTML={{ __html: process.env.waypoints }}></Script>
      <Script id="counterup" dangerouslySetInnerHTML={{ __html: process.env.counterup }}></Script>
      <Script id="jqueryZoom" dangerouslySetInnerHTML={{ __html: process.env.jqueryZoom }}></Script>
      <Script id="jqueryInview" dangerouslySetInnerHTML={{ __html: process.env.jqueryInview }}></Script>
      <Script id="jqueryEvent" dangerouslySetInnerHTML={{ __html: process.env.jqueryEvent }}></Script>
      <Script id="wow" dangerouslySetInnerHTML={{ __html: process.env.wow }}></Script>
      <Script id="isotope" dangerouslySetInnerHTML={{ __html: process.env.isotope }}></Script>

      <Script id="slick" dangerouslySetInnerHTML={{ __html: process.env.isotope }}></Script>
      <Script id="rangeSlider" dangerouslySetInnerHTML={{ __html: process.env.isotope }}></Script>
      <Script id="audioCustome" dangerouslySetInnerHTML={{ __html: process.env.isotope }}></Script>
      <Script id="main" dangerouslySetInnerHTML={{ __html: process.env.isotope }}></Script>

   {/*    <Script src="/assets/js/plugins/jquery-3.4.1.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/popper.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/bootstrap.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/imagesloaded.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.magnific-popup.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.countdown.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.waypoints.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.counterup.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.zoom.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.inview.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/jquery.event.move.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/wow.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/slick.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/ion.rangeSlider.min.js" strategy="beforeInteractive"></Script>
      <Script src="/assets/js/plugins/audio_custome.js" strategy="beforeInteractive"></Script>

      <Script src="/assets/js/main.js" strategy="beforeInteractive"></Script> */}


    </>
  )
}

