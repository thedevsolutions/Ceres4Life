import React from 'react'

export default function Committed() {
  return (
    <div className="container-fluid footer">
    <div className="row py-5 position-relative">
      <div className="left-img">
        <img src="/images/right.svg" alt="right" height={"250px"}/>
      </div>
      <div className="col-lg-12">
        <div className="community-text pb-4">
          <h6>Committed to you</h6>
        </div>
        <div className="d-block d-md-flex py-5 align-items-center justify-content-around">
         <div>
         <p className='committed-text'>9 Rainbows aims to provide partnerships with care teams or <br/> providers to support underserved women in their journey to<br/> pregnancy and during pregnancy.  With a focus on rural<br/> communities, we want to make sure it's always  possible for women <br/>to get the timely care or advice they need.  Lack of  available local<br/> services or transportation challenges is no longer a barrier.  From <br/>the comfort of your home, we provide remote access to your<br/> assigned care teams so you always have someone to talk to and<br/> care for you. </p>
         </div>
         <div>
        <img src='/images/committed-img.svg' alt='committed' className="img-fluid"/>
         </div>
       </div>
      </div>
    </div>
  </div>
  )
}
