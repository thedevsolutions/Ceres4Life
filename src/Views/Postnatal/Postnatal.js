import React from "react";
import Committed from "../../Components/Committed";
import CommunityForum from "../../Components/CommunityForum";

export default function Postnatal() {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-lg-12 px-0">
            <div className="postnatal">
              <div className="post-content">
                <h6>Postnatal Care</h6>
                <p>
                  In the immediate weeks following childbirth women need extra
                  care, including partner and <br /> family support. Labour and
                  childbirth are physically demanding, as is breastfeeding and{" "}
                  <br />
                  looking after a newborn baby. It is therefore very important
                  that women regain their strength
                  <br /> and maintain their health as they adjust to life with
                  their new baby.
                  <br />
                  Women in the postnatal period need to maintain a balanced
                  diet, just as they did during
                  <br /> pregnancy. Iron and folic acid supplementation should
                  also continue for 3 months after birth.
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
                <h6>Postnatal</h6>
                <p>
                Talk to your health care provider if you want to delay having children until later in your life. It becomes < br/> more difficult for many women and men 35 years and over to achieve a pregnancy. Women 35 years and< br/> over may have a more difficult pregnancy and birth. They may also have greater risks of medical< br/> problems during pregnancy. The baby may also be born with health problems. The quality of a man’s< br/> sperm also declines in his mid-thirties. His health problems may also increase. Even though there are< br/> fertility treatments available to assist with getting pregnant, such as in vitro fertilization, the success of< br/> treatment also declines with age.
                <br/>
                Women who are breastfeeding require additional food and
                  should drink sufficient clean
                  <br /> water. You should spend more time on nutrition
                  counselling with women who are very thin
                  <br /> and with adolescents who may need additional
                  information to help them get a balanced
                  <br /> diet. In some cases you may need to refer women to a
                  nutrition counsellor, where available. It
                  <br /> is important to note that poverty may prohibit women
                  from accessing certain foods. Exploring
                  <br /> less expensive options can be a helpful part of the
                  counselling session.
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
            <div className="py-5 text-center">
              <div>
                <img
                  src="/images/post-rep.svg"
                  alt="help"
                  height={"500px"}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Committed />
      <CommunityForum />
    </>
  );
}
