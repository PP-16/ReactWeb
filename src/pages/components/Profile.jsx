import React from "react";

const Profile = () => {
  return (
    <div className="container bg-gray-400">
      <div className="row mt-8 container">
        <div className="col-md-4 ">
          <nav
            id="navbar-example3"
            class="navbar navbar-light   bg-light flex-column align-items-stretch p-3 rounded mb-3"
          >
            <div className="mb-3 row">
              <img
                className="rounded-circle  d-block max-width-100 col-md-6"
                src="https://i.pinimg.com/736x/73/06/c0/7306c02ca454519ef347f3ff8e0458ef.jpg"
                alt="Image Description"
              />
              <h5 class="navbar-brand col-md-">Profile</h5>
            </div>
            <nav class="nav nav-pills flex-column">
              <a class="nav-link" href="#item-1">
                Acount
              </a>
              <nav class="nav nav-pills flex-column">
                <a class="nav-link ms-3 my-1" href="#item-1-1">
                  Setting Profile
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">
                  Bank and Card
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">
                  Address
                </a>
                <a class="nav-link ms-3 my-1" href="#item-1-2">
                  Privacy Setting
                </a>
              </nav>
              <a class="nav-link" href="#item-2">
                My Purchase
              </a>
              <a class="nav-link" href="#item-3">
                Notifications
              </a>
              <a class="nav-link" href="#item-3">
                My Vouchers
              </a>
            </nav>
          </nav>
        </div>
        <div className="card col-md-7 m-2 mb-3">
          <div className="row mt-2">
            <div className="col-6">
            <h3>MyProfile</h3>
            <h6>Manage You Profile</h6>
            </div>
            <div className="col-md-6 float-md-end ">
            <img
              className="rounded  d-block max-width-100 "
              src="https://i.pinimg.com/736x/73/06/c0/7306c02ca454519ef347f3ff8e0458ef.jpg"
              alt="Image Description"
            />
            </div>
          </div>
          <div></div>

          <hr />
          <h6>UserName : PP  <i class="bi bi-pencil"></i></h6>
          <h6>Name : </h6>
          <input className="form-control col-md-6" />
          <h6>Email : P *******@gmail.com  <i class="bi bi-pencil"></i></h6>
          <h6>Phone : 097********  <i class="bi bi-pencil"></i></h6>
          <h6>Gender:</h6>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input col-md-6"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1">
              Male
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2">
              Female
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3">
              LGBTQ++
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
