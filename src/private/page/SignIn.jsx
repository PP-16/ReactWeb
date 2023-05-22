import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { json } from "react-router-dom";
import { ValidateContact } from "../../validate-from/ValidateContact";

const SignIn =()=> {
    return (
        <>
            <div className="container px-4 px-lg-5">
              <div className="row gx-4 gx-lg-5 justify-content-center">
                <div className="col-lg-8 col-xl-6 text-center">
                  <h2 className="mt-0">Let's Register!</h2>
                  <hr className="divider" />
                </div>
              </div>
              <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
                <div className="col-lg-6">
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validationSchema={ValidateContact}
                    onSubmit={(values) => {
                      let data = { ...values };
                      console.log("data : " + JSON.stringify(data));
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      setFieldValue,
                    }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                          <label htmlFor="name">Your Email</label>
                          <input
                            type="text"
                            name="email"
                            // onChange={handleChange}
                            onChange={(e) => {
                              setFieldValue(
                                "email",
                                e.target.value.replace(
                                  /[^A-Za-z_.#?!@$%^&*0-9]/gi,
                                  ""
                                )
                              );
                            }}
                            onBlur={handleBlur}
                            value={values.email}
                            className={
                              "form-control" +
                              (errors.email && touched.email ? " is-invalid" : "")
                            }
                            placeholder="Your email"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="name">Password</label>
                          <input
                            type="text"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            className={
                              "form-control" +
                              (errors.password && touched.password ? " is-invalid" : "")
                            }
                            placeholder="Password"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="invalid-feedback"
                          />
                        </div>
                        <div className="row-12">
                          <button
                            type="submit"
                            className="text-center btn btn-info btn-xl col-6 mb-5"
                          >
                            Submit
                          </button>
                          <button
                            type="reset"
                            className="resetcss btn btn-danger btn-xl col-6 mb-5"
                          >
                            Reset
                          </button>
                          <div className="col-12">
                            <a
                              className="m-7 ml-100"
                              href="https://www.facebook.com/"
                            >
                              <i className="bi bi-facebook fs-2 text-info"></i>
                            </a>
                            <a
                              className="m-5"
                              href="https://support.google.com/mail/answer/8494?hl=th&co=GENIE.Platform%3DDesktop"
                            >
                              <i className="bi bi-envelope fs-2  text-danger"></i>
                            </a>
                            <a
                              className="m-5"
                              href="https://twitter.com/login?lang=th"
                            >
                              <i className="bi bi-twitter fs-2  text-info"></i>
                            </a>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
        </>
      );
}

export default SignIn