import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";

export default function ContactUs() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <div className="contact">
              <div className="contact-content">
                <h6>
                  Let’s get in <br />
                  Touch !
                </h6>
                <p>
                  We would love to hear from you and help you resolve any
                  challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
