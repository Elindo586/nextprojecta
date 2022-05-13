import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

function ServicesNav() {
  const [pathName, setPathName] = useState();

  useEffect(() => {
    const url = window.location.pathname;
    setPathName(url);
  });

  return (
    <>
      <div className="col-md-3 ">
        <h2 className="nav2title">SERVICES</h2>
        <ul className="nav2">
          <li>
            <h5 className="link1" href="">
              Oil Analysis
            </h5>
          </li>

          <dl
            className={
              pathName === "/services/fluid-analysis"
                ? "link2 active2"
                : "link2"
            }
          >
            <Link href="/services/fluid-analysis"> Laboratory Testing</Link>
          </dl>

          <li>
            <h5 className="link1" href="#">
              Preventive Maintenance
            </h5>
          </li>
          <dl
            className={
              pathName === "/services/preventive-maintenance-programs"
                ? "link2 active2"
                : "link2"
            }
          >
            <Link href="/services/preventive-maintenance-programs">
              Programs
            </Link>
          </dl>
        </ul>
      </div>
    </>
  );
}

export default ServicesNav;
