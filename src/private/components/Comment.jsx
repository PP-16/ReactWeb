import React from "react";

const Comment = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 m-5 p-2">
          <div className="media media-comment">
            <img
              className="rounded-circle  d-block max-width-100 col-md-6"
              src="https://i.pinimg.com/736x/73/06/c0/7306c02ca454519ef347f3ff8e0458ef.jpg"
              alt="Image Description"
            />
            <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30 col-md-6">
              <div className="g-mb-15">
                <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                <span className="g-color-gray-dark-v4 g-font-size-12">
                  5 days ago
                </span>
              </div>

              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus
                ras purus odio, vestibulum in vulputate at, tempus viverra
                turpis.
              </p>

              <ul className="list-inline d-sm-flex my-0 m-2">
                <li className="list-inline-item g-mr-20">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                    178
                  </a>
                </li>
                <li className="list-inline-item g-mr-20">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    34
                  </a>
                </li>
                <li className="list-inline-item ml-auto">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-12 m-5 p-2">
          <div className="media g-mb-30 media-comment row-md-12 ">
            <img
              className="rounded-circle  d-block max-width-100 col-md-6"
              src="https://i.pinimg.com/564x/c7/63/19/c76319a63f7239ec3d4ef2ecd3a7e68b.jpg "
              alt="Image Description"
            />
            <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30 col-md-6">
              <div className="g-mb-15">
                <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
                <span className="g-color-gray-dark-v4 g-font-size-12">
                  5 days ago
                </span>
              </div>

              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin. Cras purus odio, vestibulum in
                vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                nisi vulputate fringilla. Donec lacinia congue felis in faucibus
                ras purus odio, vestibulum in vulputate at, tempus viverra
                turpis.
              </p>

              <ul className="list-inline d-sm-flex my-0">
                <li className="list-inline-item g-mr-20">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                    178
                  </a>
                </li>
                <li className="list-inline-item g-mr-20">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                    34
                  </a>
                </li>
                <li className="list-inline-item ml-auto">
                  <a
                    className="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover m-2"
                    href="#!"
                  >
                    <i className="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                    Reply
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
