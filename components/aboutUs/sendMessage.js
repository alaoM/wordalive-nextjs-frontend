import React, { useState } from 'react'
import { useForm } from "react-hook-form"

export const SendMessage = () => {
    const [message, setMessage] = useState("")

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (async (data) => {
        const apiURLEndPoint = `/api/sendMail`;
        const options = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: data
            })
        };
        const response = await fetch(apiURLEndPoint, options);
        const result = await response.json()
        setMessage(result.data)
        reset()

    })

    return (
        <div className="section dark-overlay dark-overlay-3 bg-cover bg-center bg-norepeat wow fadeInUp" data-wow-toggle="0.5s" id="contact-us" style={{ backgroundImage: 'url(assets/img/subheader.jpg)' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3" />
                    <div className="col-lg-6 mb-lg-30">
                        <form onSubmit={handleSubmit(onSubmit)} id="contact-form" action="assets/js/php/send-mail.php" className="mf_form_validate ajax_submit" encType="multipart/form-data">
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <i className="far fa-user" />
                                        <input
                                            {...register("fname", { required: true })}
                                            aria-invalid={errors.fname ? "true" : "false"}
                                            className="form-control transparent text-white" placeholder="First Name" />
                                        {errors.fname?.type === 'required' && <div className="alert alert-danger" role="alert">First name is required</div>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <i className="far fa-user" />
                                        <input
                                            {...register("lname", { required: true })}
                                            aria-invalid={errors.lname ? "true" : "false"}
                                            className="form-control transparent text-white" placeholder="Last Name" />
                                        {errors.lname?.type === 'required' && <p className="alert alert-danger  alert-dismissible" role="alert">Last name is required</p>}
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <i className="far fa-phone" />
                                        <input {...register("phoneNumber", { required: true })}
                                            aria-invalid={errors.phoneNumber ? "true" : "false"}
                                            className="form-control transparent text-white" placeholder="Phone Number" />
                                        {errors.phoneNumber?.type === 'required' && <p className="alert alert-danger" role="alert">We would like to give you a call, Please submit your phone number.</p>}

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <i className="far fa-envelope" />
                                        <input {...register("email", {
                                            required: "Email Address is required",
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Please enter a valid email',
                                            }
                                        })} aria-invalid={errors.mail ? "true" : "false"} className="form-control transparent text-white" placeholder="Email Address" />

                                        {errors.email && <p className=" alert alert-danger" role="alert">{errors.email?.message}</p>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <i className="far fa-pencil" />
                                        <input {...register("subject", { required: true })} className="form-control transparent text-white" placeholder="Subject" />
                                        {errors.subject?.type === 'required' && <p className="alert alert-danger  alert-dismissible" role="alert">This field is required</p>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea {...register("message", { required: true })} className="form-control transparent text-white" placeholder="Enter Message" rows={6} />
                                        {errors.message?.type === 'required' && <p className="alert alert-danger  alert-dismissible" role="alert">This field is required</p>}
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <button id="submit" type="submit" className="sigma_btn-custom d-block w-100" name="submit">
                                        Send <i className="far fa-arrow-right" />
                                    </button>

                                    <div className="server_response w-100">
                                        {message.title === "Success" ?
                                      
                                        <div className="mb-0 mt-3 alert alert-success  alert-dismissible">{message.message} You would get feedback from us soon<button type="button" className="close" data-bs-dismiss="alert">&times;</button></div>
                                        : message.title === "Success" ? 
                                        <div className="mb-0 mt-3 alert alert-danger  alert-dismissible">{message.message} Please try to reach us via other channels<button type="button" className="close" data-bs-dismiss="alert">&times;</button></div>
                                        : ""
                                    }
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
