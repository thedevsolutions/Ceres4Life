import React, { useState } from "react";
import First from "../D-Fragments/First";
import Second from "../D-Fragments/Second";
import { BsFillAlarmFill, BsFillBasketFill } from "react-icons/bs";

export default function SideBar() {

    const [fragment, setFragment] = useState(0);

    const loadFragment = () => {
      switch (fragment) {
        case 0:
          return <First />
        case 1:
          return <Second />
        default:
          break;
      }
    }
  
  return (
    <div>
          <div class="sidebar">
            <ul>
                <li>
                <a href="#/" className={fragment === 0 ? "nav-link px-3 active" : "nav-link px-3"} onClick={() => setFragment(0)}>
                      <BsFillAlarmFill className="side-icon"/>
                        <div>Dashboard</div>
                    </a>
                </li>
                <li>
                   <a href="#/" className={fragment === 1 ? "nav-link px-3 active" : "nav-link px-3"} onClick={() => setFragment(1)}>
                        <BsFillBasketFill className="side-icon"/>
                        <div>Students</div>
                    </a>
                </li>
            </ul>
        </div>
        <main>
        {loadFragment()}
      </main>
    </div>
  )
}
