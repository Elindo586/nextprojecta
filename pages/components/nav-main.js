import { React, useState, useEffect } from "react";
import Link from "next/link";

function MainNav() {
  const [isPath, setIsPath] = useState();
  useEffect(() => {
    title();
  }, [isPath]);

  const show = () => {
    let drop = document.getElementById("navbarTogglerDemo02");

    if (drop.classList.value === "navbar-collapse collapse") {
      drop.classList.value = "navbar-collapse collapse show";
    } else {
      drop.classList.value = "navbar-collapse collapse";
    }
  };

  const title = () => {
    let findTitle = window.location.pathname;
    setIsPath(findTitle);
    // document.title = `TU - Technical Union | ${findTitle}`;
    switch (findTitle) {
      case "/":
        document.title = "TU - Technical Union | Home";
        break;
      case "/products/piston-pumps":
        document.title = "TU - Technical Union | Products";
        break;
      case "/services/fluid-analysis":
        document.title = "TU - Technical Union | Services";
        break;
      case "/inventory":
        document.title = "TU - Technical Union | Inventory";
        break;
      case "/fluid-power-formulas":
        document.title = "TU - Technical Union | Formulas";
        break;
      case "/interactive":
        document.title = "TU - Technical Union | Interactive";
        break;
      case "/contact-us":
        document.title = "TU - Technical Union | Contact Us";
        break;
      default:
        console.log("This is not a part of this website.");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-dark navbar-dark"
      onClick={title}
    >
      <Link href="/" className="navbar-brand" onClick={title}>
        <a>TECHNICAL UNION</a>
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={show}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/" className="nav-link" onClick={title}>
              <a>| Home</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Products/products.html">| Products</a> */}
            <Link
              href="/products/piston-pumps"
              className="nav-link"
              onClick={title}
            >
              <a>| Products</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="/Services/Services.html">| Services</a> */}
            <Link
              href="/services/fluid-analysis"
              className="nav-link"
              onClick={title}
            >
              <a>| Services</a>
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/inventory" className="nav-link">
              <a>| Inventory</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="formulas.html">| Formulas</a> */}
            <Link
              href="/fluid-power-formulas"
              className="nav-link"
              onClick={title}
            >
              <a>| Formulas</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="Interactive.html">| Interactive</a> */}
            <Link href="/interactive" className="nav-link" onClick={title}>
              <a>| Interactive</a>
            </Link>
          </li>

          <li className="nav-item">
            {/* <a className="nav-link" href="contactus.html">| Contact Us</a> */}
            <Link href="/contact-us" className="nav-link" onClick={title}>
              <a>| Contact Us</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
