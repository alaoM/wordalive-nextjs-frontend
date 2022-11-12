import React from 'react'
import AboutUsForm from '../components/about-us-form'
import { SendMessage } from '../components/aboutUs'
import { Footer, Navbar } from '../components/utils'

function About() {
    return (
        <>
            <Navbar />
            <div>
                <div className="sigma_subheader dark-overlay dark-overlay-2 wow slideInLeft" data-wow-delay="0.4s" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }}>
                    <div className="container">
                        <div className="sigma_subheader-inner">
                            <div className="sigma_subheader-text">
                                <h1>About Us</h1>
                                <p className="text-white mb-0">
                                    Things to know about Word Alive Minnistry.
                                </p>
                            </div>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a className="btn-link" href="index.php">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        About Us
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
             
                <section className="section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="sigma_img-box">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img src="assets/img/about-me/dsa3452.jpeg" alt="service" className="wow fadeInRight" data-wow-delay="0.3s" />
                                            <img className="ms-0 wow fadeInLeft" data-wow-delay="0.5s" src="assets/img/about-me/ftgdrt334.jpeg" alt="service" />
                                        </div>
                                        <div className="col-lg-6 mt-0 mt-lg-5 rounded-circle">
                                            <img src="assets/img/about-me/dvse234.jpeg" alt="service" className="wow fadeInLeft" data-wow-delay="0.3s" />
                                            <img className="ms-0 wow fadeInRight" data-wow-delay="0.7s" src="assets/img/about-me/qjsk450.jpeg" alt="service" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="me-lg-30">
                                    <div className="section-title mb-0 text-start">
                                        <p className="subtitle">Word Alive</p>
                                        <h4 className="title">
                                            The Word Lives International Misitry.
                                        </h4>
                                    </div>
                                    <p className="blockquote bg-transparent text-justified">
                                        Word Alive have the vision to reach out to youths of all levels of life (married, singles, students, and teenagers). The vision is a way to join other God’s generals in the battle to nip down at least to the bearest minimum, through the grace and the power of the Living Word of God, the moral decadence, youthful exuberance, juvenile delinquency, cultism and sort that have eaten deep into the marrow of the Nigerian society especially the Nigerian Secondary Schools and our Tertiary Institutions. More so, this commission has the leading of the Holy Spirit to help our youths in many areas of youth life that has posed serious challenge to them such as career development, relationships, entrepreneurship, emotional intelligence and most importantly their salvation with Christ.
                                    </p>
                                    <div className="sigma_icon-block icon-block-3">
                                        <div className="icon-wrapper">
                                            <i className="fas fa-eye" />
                                        </div>
                                        <div className="sigma_icon-block-content">
                                            <h5>Vision</h5>
                                            <p>
                                                To foster the Total Personal and Spiritual Growth of each Young person.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="sigma_icon-block icon-block-3">
                                        <div className="icon-wrapper">
                                            <i className="fas fa-plane-departure" />
                                        </div>
                                        <div className="sigma_icon-block-content">
                                            <h5>Mission</h5>
                                            <p>
                                                Ministering to foster positive Youthful Development and Growth in both Christian discipleship and Christian identity; addressing their unique developmental, social and religious needs and nurturing the qualities and assets necessary for Christlikeness.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section primary-light-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="me-lg-30">
                                    <div className="section-title mb-0 text-start">
                                        <p className="subtitle">Our Activities</p>
                                        <h4 className="title">Know the Knowledge of God</h4>
                                    </div>
                                    <p className="blockquote bg-transparent">
                                        Teaching the youth the knowledge and power of God.
                                    </p>
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                                <i className="fas fa-praying-hands" />Outreaches &amp; crusades.
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                                <i className="fas fa-bible" /> Discipleship</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                                <i className="fas fa-user" />Youth Counselling and Guidance</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <p>
                                                Reach the unbelieving youths with the messages of Christ, transforming them into the image of God and acquaint the people with the knowledge of God for exploit in the kingdom
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                            <p>
                                                Equip youths for fruitfulness and fulfillment of purpose and destiny, Connect with others in building a strong fellowship and network that will foster unity in the youth
                                            </p>
                                        </div>
                                        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                            <p>
                                                Harness Opportunities of global relevance for youths to love the Lord in obedience.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInDown" data-wow-toggle="0.9s">
                                <img src="assets/img/about-group/4.jpeg" alt="about" />
                            </div>
                        </div>
                    </div>
                </section>
                
                <SendMessage/>
              
                <div id="details" className="section section-padding pt-5 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-lg-3">
                                <div className="sigma_icon-block text-center light icon-block-7">
                                    <i className="flaticon-email" />
                                    <div className="sigma_icon-block-content">
                                        <span>Send Email <i className="far fa-envelope" /> </span>
                                        <h6> Email Address</h6>
                                        <a href="mailto: anikayo4ever@gmail.com">anikayo4ever@gmail.com</a>
                                    </div>
                                    <div className="icon-wrapper">
                                        <i className="flaticon-email" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="sigma_icon-block text-center light icon-block-7">
                                    <div className="sigma_icon-block-content">
                                        <span>Phone Number <i className="far fa-phone" /> </span>
                                        <h6> Phone Number</h6>
                                        <a href="tel: +234 806 453 6045"> +234 806 453 6045</a>
                                        <a href="tel: +234 705 202 3523"> +234 705 202 3523</a>
                                    </div>
                                    <div className="icon-wrapper">
                                        <i className="flaticon-telephone" />
                                    </div>
                                </div>
                            </div>
                            {/*  */}
                            {/* <div class="col-lg-3"> */}
                            {/* <div class="sigma_icon-block text-center light icon-block-7"> */}
                            {/* <i class="flaticon-paper-plane"></i> */}
                            {/* <div class="sigma_icon-block-content"> */}
                            {/* <span>Find Us Here <i class="far fa-location-circle"></i> </span> */}
                            {/* <h6> Address </h6> */}
                            {/* <p>16/A Daddy Yankee Tower</p> */}
                            {/* <p>New York, US</p> */}
                            {/* </div> */}
                            {/* <div class="icon-wrapper"> */}
                            {/* <i class="flaticon-paper-plane"></i> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}
                            <div className="col-lg-3">
                                <div className="sigma_icon-block text-center light icon-block-7">
                                    <i className="flaticon-paper-plane" />
                                    <div className="sigma_icon-block-content">
                                        <span>Donate <i className="far fa-piggy-bank" /> </span>
                                        <h6>Zenith Bank.</h6>
                                        <p>Adesoye Owolabi Akeem</p>
                                        <p>1003592138</p>
                                    </div>
                                    <div className="icon-wrapper">
                                        <i className="flaticon-paper-plane" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default About