import React from 'react'

export default function TopBar() {
  return (
    <div>
         <div class="topbar">
            <div class="d-logo">
                <h2>Brand.</h2>
            </div>
            <div class="search">
                <input type="text" name="search" placeholder="search here"/>
                <label for="search"><i class="fas fa-search"></i></label>
            </div>
            <i class="fas fa-bell"></i>
            <div class="user">
                <img src="img/doctor1.png" alt="user"/>
            </div>
        </div>
    </div>
  )
}
