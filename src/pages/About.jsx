import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container mt-50"> 
    <section className=" page-section bg-warning " id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="text-white mt-0">Buy It If You Want</h2>
              <hr className="divider divider-light" />
              <p className="text-white-75 mb-4">
              Maybe a thoughtless purchase It's good for your mind.
              </p>
              <NavLink className="btn btn-light btn-xl" to="/product">
                Go To Shopping!!!
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
