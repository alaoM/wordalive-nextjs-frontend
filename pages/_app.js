// import '../styles/globals.css'
import "../styles/css/plugins/bootstrap.min.css"
import "../styles/css/plugins/animate.min.css"
import "../styles/css/plugins/magnific-popup.css"
import "../styles/css/plugins/slick.css"
import "../styles/css/plugins/slick-theme.css"
import "../styles/css/plugins/ion.rangeSlider.min.css"
import "../styles/fonts/flaticon/flaticon.css"
import "../styles/css/plugins/font-awesome.min.css"
import "../styles/css/style.css"
import "../styles/css/responsive.css"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {

  return (
    <> 
    <Layout>
       <Component {...pageProps} />
    </Layout>
     
    </>

  )


}

export default MyApp
