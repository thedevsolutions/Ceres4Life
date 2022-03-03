import React from 'react'

export default function Help() {
  return (
    <div className="container-fluid">
    <div className="row py-5 position-relative">
      <div className="top-img">
        <img src="/images/right.svg" alt="right" height={"250px"} />
      </div>
      <div className="col-lg-12">
        <div className="community-text py-4">
          <h6>What Help do I get</h6>
          <p>
          When you connect with your care team, a triage nurse will assess your <br/> status and plan the services that best meet your needs.
          </p> 
        </div>
        <div className="d-block d-md-flex py-5 align-items-center justify-content-around">
         <div>
          <img src='/images/help-img.svg' alt='help' height={"500px"} className="img-fluid"/>
         </div>
         <div>
            <div className="list-view">
                <h6 className='text-pink'>Example of our care service</h6>
               <div className="list">
               <ul>
                    <li>Maternity health counseling and coaching</li>
                    <li>Mental wellness</li>
                    <li>Overall OB wellness</li>
                    <li>Nutrition management & allergies</li>
                    <li>Family planning & safety </li>
                    <li>Chronic medical condition management (i.e, Heart, <br/>
      Diabetes,  Renal, Autoimmune, Blood pressure, etc)</li>
                    <li>Medication mangement</li>
                    <li>Sexual infection control</li>
                    <li>Immunization & Blood work</li>
                    <li>Sonography & more</li>
                </ul>
               </div>
            </div>
         </div> 
       </div>
      </div>
    </div>
  </div>
  )
}
