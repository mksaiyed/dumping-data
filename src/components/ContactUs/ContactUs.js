import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactUs.css";

const validateForm = (values) => {
    const errors = {};

    if (!values.firstName) {
        errors.firstName = "First Name is required";
    }

    if (!values.lastName) {
        errors.lastName = "Last Name is required";
    }

    if (!values.email) {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.number) {
        errors.number = "Number is required";
    } else if (!/^\d+$/.test(values.number)) {
        errors.number = "Invalid number";
    } else if (values.number.length < 10) {
        errors.number = "minimum 10 digits required";
    }

    if (!values.message) {
        errors.message = "Message is required";
    }

    return errors;
};

const ContactUs = () => {
    const handleSubmit = (values) => {
        console.log(
            "🚀 ~ file: ContactUs.js:37 ~ handleSubmit ~ values:",
            values
        );
        // ... form submission logic
    };

    return (
        <div className="bg-container">
            <div className="contact-us-container">
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        number: "",
                        message: "",
                    }}
                    onSubmit={handleSubmit}
                    validate={validateForm}
                >
                    <Form className="formik-form">
                        <div className="form-group">
                            <div className="input-container">
                                <label htmlFor="firstName">First Name:</label>
                                <Field
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                />
                                <ErrorMessage
                                    name="firstName"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <label htmlFor="lastName">Last Name:</label>
                                <Field
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                />
                                <ErrorMessage
                                    name="lastName"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <label htmlFor="number">Number:</label>
                                <Field type="text" id="number" name="number" />
                                <ErrorMessage
                                    name="number"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="input-container">
                                <label htmlFor="message">Message:</label>
                                <Field
                                    as="textarea"
                                    id="message"
                                    name="message"
                                    rows="6"
                                />
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="error"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default ContactUs;
