import React from "react";
import BlogsNews from "../../Components/BlogsNews";

export default function News() {

    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <div className="news">
              <div className="news-content">
                <h6>
                  Our News & Blogs
                </h6>
                <p>
                  We would love to hear from you and help you resolve any
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center footer py-5 mx-0">
         <BlogsNews/>
        </div>
      </div>
    </>
  );
}
