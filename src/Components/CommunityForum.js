import React from 'react'

export default function CommunityForum() {
  return (
   <div className="container-fluid">
       <div className="row py-5 position-relative">
           <div className='right-img'>
               <img src='/images/right.svg' alt='right' height={"250px"}/>
           </div>
         <div className="col-lg-12">
             <div className="community-text">
             <h6>Community Forum</h6>
             <p>This forum allows women who are already registered to communicate with <br/>each other, share and learn from their journeys, ask specific questions or <br/> just get moral support from others.   </p>
             </div>
             <div className="d-block d-md-flex py-5 align-items-center justify-content-around">
           <div>
             <img src="/images/community-img.svg" alt="community" className="img-fluid" />
           </div>
           <div>
           <button className="btn btn-secondary">Schedule consultation</button>
           </div>
         </div>
         </div>
       </div>
   </div>
  )
}
