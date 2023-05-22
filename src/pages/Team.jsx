import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { NavLink, useLocation } from "react-router-dom";
import Comment from "../private/components/Comment";

const Team = () => {
  // const location =  useLocation()
  // const {id,data} = location.state
  // const item =  data.find(item.id===id)
  // console.log(location);

  let [count, setCount] = useState(1);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 1) {
      count = count - 1;
    }

    setCount(count);
  }

  return (
    <div>
      <div className="card mt-5">
        <div className="d-flex justify-content-between">
            <NavLink to="/product" >
              <button className="btn btn-light m-4 ">
                <i class="bi bi-arrow-left-circle "></i> Back
              </button>
            </NavLink>
            <NavLink to="/cart">
              <button className="btn btn-light m-4">
                <i class="bi bi-cart4">Cart</i>
              </button>
            </NavLink>
        </div>
        <div className="row">
          <div className="card-body col-md-3">
            <Carousel className="max-width-700">
              <div>
                <img src="https://i.pinimg.com/564x/35/b9/ef/35b9ef2211e55849bbf3674013faa53a.jpg" />
              </div>
              <div>
                <img src="https://i.pinimg.com/564x/70/b2/75/70b2758aee005a2b78c369375137d933.jpg" />
              </div>
              <div>
                <img src="https://i.pinimg.com/564x/55/3d/6c/553d6cf2c5e71395e6c87c2259c537a6.jpg" />
              </div>
            </Carousel>
          </div>
          <div className="card-body  col-md-8 mt-3">
            <h1 className="text-center">Product 1</h1>
            <h6 className="text-end">
              4.5 :<i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-half"></i>
              <i class="bi bi-star"></i> | 4.5K Ratings
            </h6>
            <div className="bg-light text-center p-2 rounded">
              <h4>Price : 500 ฿</h4>
            </div>
            <h6>
              Details : is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </h6>
            <div className="mt-3">
              <h6>Size :</h6>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label class="form-check-label" for="inlineRadio1">
                  S
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
                  M
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
                  L
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
                  XL
                </label>
              </div>
            </div>
            <div className="d-grid gap-2 d-md-flex  mt-2">
              <h6>Amount :</h6>
              <button className="btn btn-success" onClick={incrementCount}>
                +
              </button>
              <h3>{count}</h3>
              <button className="btn btn-danger" onClick={decrementCount}>
                -
              </button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-5">
              <button className="btn btn-outline-primary me-md-2" type="button">
                Add to cart
              </button>
              <button className="btn btn-primary" type="button">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-90">
        <Comment />
      </div>
    </div>
  );
};

export default Team;
