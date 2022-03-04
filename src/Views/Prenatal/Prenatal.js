import React from "react";
import Committed from "../../Components/Committed";
import CommunityForum from "../../Components/CommunityForum";

export default function Prenatal() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <div className="prenatal">
              <div className="pre-content">
                <h6>Prenatal Care</h6>
                <p>
                  You decide if and when you want to have children. About 50
                  percent of pregnancies are not
                  <br /> planned. When pregnancies are planned, you have time to
                  make sure you are healthy and
                  <br /> prepared before you have a baby. Having a reproductive
                  life plan can help. A reproductive life <br /> plan helps you
                  to set goals and understand how children may fit into your
                  goals. For example,
                  <br /> what are your plans for school, work, and travel? How
                  do children fit into these plans?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 position-relative footer mx-0">
          <div className="left-img">
            <img src="/images/right.svg" alt="right" height={"250px"} />
          </div>
          <div className="col-lg-12 py-5">
            <div className="community-text py-5">
              <div>
                <h6>Prenatal</h6>
                <p>
                  Talk to your health care provider if you want to delay having
                  children until later in your life. It becomes
                  <br /> more difficult for many women and men 35 years and over
                  to achieve a pregnancy. Women 35 years <br />
                  and over may have a more difficult pregnancy and birth. They
                  may also have greater risks of medical <br />
                  problems during pregnancy. The baby may also be born with
                  health problems. The quality of a man’s
                  <br /> sperm also declines in his mid-thirties. His health
                  problems may also increase. Even though there are
                  <br /> fertility treatments available to assist with getting
                  pregnant, such as in vitro fertilization, the success of
                  <br /> treatment also declines with age.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-5 position-relative mx-0">
          <div className="top-img">
            <img src="/images/right.svg" alt="right" height={"250px"} />
          </div>
          <div className="col-lg-12">
            <div className="community-text py-4">
              <h6>Reproductive Life Planning</h6>
              <p>
                When you connect with your care team, a triage nurse will assess
                your <br /> status and plan the services that best meet your
                needs.
              </p>
            </div>
            <div className="d-block d-md-flex py-5 align-items-center justify-content-around">
              <div>
                <div className="list-view">
                  <div className="list">
                    <ul>
                      <li>
                        Reproductive life planning often includes thinking
                        about:
                      </li>
                      <li>Your general medical health.</li>
                      <li>Your mental health and support systems.</li>
                      <li>Your family’ health history.</li>
                      <li>Your reproductive health.</li>
                      <li>
                        Work with your health care provider to develop your<br/>
                        reproductive life plan. There are also online tools
                        available to <br/>help.
                      </li>
                      <li>
                        If you are sexually active and not planning a pregnancy,
                        see<br/> your health care provider about the birth control
                        method best <br/>for you.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/reproductive.svg"
                  alt="help"
                  height={"500px"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Committed/>
      <CommunityForum/>
    </>
  );
}
