import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { User } from "../../data/Data";
export const Profile = () => {
  return (
    <>
      <div className="card">
        {User.map((item, index) => (
          <div className="row">
            <div className="col-md-4">
              <div className="card-body">
                <img
                  src={item.ImageUser}
                  className="rounded mx-auto d-block max-width-300"
                />
                <div className="m-2 ">
                  <a
                    href="https://www.facebook.com/"
                    className="btn btn-info mb-0 me-1"
                    target="_blank"
                  >
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="btn btn-primary mb-0 me-1 "
                    target="_blank"
                  > 
                    <i class="bi bi-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/"
                    className="btn btn-info mb-0"
                    target="_blank"
                  >
                    <i class="bi bi-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h6>
                  UserName : {item.Name} <i class="bi bi-pencil"></i>
                </h6>
                <h6>
                  Email : {item.Email} <i class="bi bi-pencil"></i>
                </h6>
                <h6>
                  Phone :{item.PhonNumber}<i class="bi bi-pencil"></i>
                </h6>
                <h6>Gender: {item.gender}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
