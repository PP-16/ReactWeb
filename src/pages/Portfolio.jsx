import React from "react";
import { Link } from "react-router-dom";
import { data } from "../data/Data";

const Portfolio = () => {
  return (
    <div className="cardbody container">
      <div className="container">
        {data.map((item, index) => (
          <div className="card">
            <div className="box">
              <Link to="/details" className="content"state={{item:item}}>
                <img src={item.Img} key={index} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
