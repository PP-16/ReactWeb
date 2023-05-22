import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section className="container page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <NavLink to="/cart">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-cart-plus fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">Cart</h3>
                <p className="text-muted mb-0">
                  Our themes are updated regularly to keep them bug free!
                </p>
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-card-checklist fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">My Purchase</h3>
              <p className="text-muted mb-0">
                All dependencies are kept current to keep things fresh.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center" >
            <div className="mt-5" >
              <div className="mb-2">
                <i className="bi-bell fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">Notification</h3>
              <p className="text-muted mb-0">
                You can use this design as is, or you can make changes!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <NavLink to="/profile">
              <div className="mt-5">
                <div className="mb-2">
                  <i className="bi-person-circle fs-1 text-primary"></i>
                </div>
                <h3 className="h4 mb-2">My Account</h3>
                <p className="text-muted mb-0">
                  Is it really open source if it's not made with love?
                </p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
