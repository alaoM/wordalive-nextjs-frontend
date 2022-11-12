import React from 'react'

const ContactUsForm = async () => {
    /* let url = process.env.WORD_ALIVE_URL_PROD;
    const apiURLEndPoint = `${url}:3000/api/sendMail`;
    const id = params.checker;
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: id,
        }),
    };
    const res = await fetch(apiURLEndPoint, options);    
    const data = await res.json()  */
  return (
    <div className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat wow fadeInUp" data-wow-toggle="0.5s" id="contact-us" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3" />
                            <div className="col-lg-6 mb-lg-30">
                                <form method="post" id="contact-form" action="assets/js/php/send-mail.php" className="mf_form_validate ajax_submit" encType="multipart/form-data">
                                    <div className="form-row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="far fa-user" />
                                                <input type="text" className="form-control transparent text-white" placeholder="First Name" name="fname" defaultValue />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="far fa-user" />
                                                <input type="text" className="form-control transparent text-white" placeholder="Last Name" name="lname" defaultValue />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="far fa-phone" />
                                                <input type="text" className="form-control transparent text-white" placeholder="Phone Number" name="phoneNumber" defaultValue />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <i className="far fa-envelope" />
                                                <input type="text" className="form-control transparent text-white" placeholder="Email Address" name="email" defaultValue />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <i className="far fa-pencil" />
                                                <input type="text" className="form-control transparent text-white" placeholder="Subject" name="subject" defaultValue />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control transparent text-white" placeholder="Enter Message" rows={6} defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button id="submit" type="submit" className="sigma_btn-custom d-block w-100" name="submit">
                                                Send <i className="far fa-arrow-right" />
                                            </button>
                                            <div className="server_response w-100">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-3" />
                        </div>
                    </div>
                </div>
  )
}

export default ContactUsForm