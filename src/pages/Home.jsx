import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
        <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">
                Welcome To My Treasure
              </h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
                if you want to buy just buy it!!!
              </p>
              <Link className="btn btn-primary btn-xl" to="/product">
                See More
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div id="portfolio">
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-lg-4 col-sm-6">
            <NavLink 
              className="portfolio-box"
              title="Project Name"
              to="/product"
            >
              <img
                className="width-450 height-400"
                src="https://i.pinimg.com/564x/da/cf/73/dacf73f1dafe338167f47ce1659acf9b.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name1</div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-sm-6">
            <NavLink
              className="portfolio-box"
              to="/product"
              title="Project Name"
            >
              <img
                 className="width-450 height-400"
                src="https://i.pinimg.com/564x/a8/eb/8f/a8eb8f907f215f061fb4da5a4de57c3d.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-sm-6">
            <NavLink
              className="portfolio-box"
              to="/product"
              title="Project Name"
            >
              <img
                 className="width-450 height-400"
                src="https://i.pinimg.com/564x/ae/78/3f/ae783fc5296a40d9870b11f0c296ead5.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-sm-6">
            <NavLink
              className="portfolio-box"
              to="/product"
              title="Project Name"
            >
              <img
                className="width-450 height-400"
                src="https://i.pinimg.com/564x/85/46/a4/8546a4bf63764e81ee09c99b667903ff.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-sm-6">
            <NavLink
              className="portfolio-box"
              to="/product"
              title="Project Name"
            >
              <img
                className="width-450 height-400"
                src="https://i.pinimg.com/564x/86/c8/23/86c823f831677e2235f88fadf9a7014d.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </NavLink>
          </div>
          <div className="col-lg-4 col-sm-6">
            <NavLink
              className="portfolio-box"
              to="/product"
              title="Project Name"
            >
              <img
                className="width-450 height-400"
                src="https://i.pinimg.com/564x/98/08/26/9808267d5056e5ed41854ba4c57bc543.jpg"
                alt="..."
              />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Project Name</div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Home;
