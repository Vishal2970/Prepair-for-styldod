import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";

export function LoginMode({ description, keywords, author, title }) {
  return (
    <>
      <Helmet bodyAttributes={{ style: "background-color: #FADCAB" }} />
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="row">
          <div className="col-sm-6 mb-3 mb-sm-0 p-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Shopkeeper Login</h5>
                <img
                  src="shopkeeper.avif"
                  alt="Shopkeeper"
                  width="300"
                  height="200"
                />
                <Link to="/login/eb5e34" className="btn btn-primary m-3 p-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 p-2">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Wholesalers Login</h5>
                <img
                  src="/wholesalers.jpg"
                  alt="wholesalers"
                  width="300"
                  height="200"
                />
                <Link to="/login/6322f0" className="btn btn-primary m-3 p-2">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
