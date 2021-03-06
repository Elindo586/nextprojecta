import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import MotorForm from "../components/Motor-form";
import ProductNav from "../components/nav-products";

const GerolerMotor = () => {
  return (
    <div>
      <div>
        <Head>
          <title> TU - Technical Union | Geroler Hydraulic Motors </title>

          <meta
            name="description"
            content=" Find our geroler hydraulic motor catalog"
          />
          <meta name="keywords" content=" geroloer motorsS" />
          <meta name="author" content="Edgar Lindo" />

          <meta
            property="og:title"
            content=" Technical Union | Hydraulic Geroler Motors"
          />
          <meta
            property="og:description"
            content=" Hydraulic geroler motors from Technical Union"
          />
          <meta
            property="og:image"
            content="/images/oppictures/geroler-motors.png"
          />
          <meta
            property="og:url"
            content="http://www.tu.biz/products/geroler-motors"
          />
        </Head>
      </div>
      <div className="row">
        <div className="col-md-9 table-responsive">
          <div className="col-md-12">
            <h6 className="product-title-text"> Geroler Motors</h6> <br />
            <span className="product-pic d-flex justify-content-center">
              <Image
                src="/images/geroloer-motors.png"
                id="geroler-motors"
                alt="hydraulic geroloer motors"
                width={168}
                height={137}
              />
            </span>
            <br />
            <Link href="/pdf/hi-torque-low-speed-hydraulic-motors.pdf">
              <a
                className="btn btn-info d-flex justify-content-center"
                target="blank"
              >
                Download PDF
              </a>
            </Link>
            <br />
            <table className="table table-hover table-striped table-bordered">
              <thead>
                <tr>
                  <th colSpan="5" className="product-title-table-text">
                    Geroler Motors{" "}
                  </th>
                </tr>

                <tr className="inside-table-text">
                  <td>Model</td>
                  <td>Type</td>
                  <td>
                    Displacement
                    <br />
                    &gt; (cu. in.??)
                  </td>
                  <td>
                    {" "}
                    Pressure <br />
                    &gt; (psi)
                  </td>
                  <td> RPM</td>
                </tr>
              </thead>

              <tbody>
                <tr className="inside-table-text">
                  <td>H Series</td>
                  <td>Axial</td>
                  <td>3-23</td>
                  <td> 2,400</td>
                  <td>30-800</td>
                </tr>

                <tr className="inside-table-text">
                  <td>S Series</td>
                  <td>Axial</td>
                  <td>3-23</td>
                  <td> 3,000</td>
                  <td>30-970</td>
                </tr>

                <tr className="inside-table-text">
                  <td>2,000 Series</td>
                  <td>Disc</td>
                  <td>5-23</td>
                  <td> 3,250</td>
                  <td>30-800</td>
                </tr>

                <tr className="inside-table-text">
                  <td>6,000 Series</td>
                  <td>Disc</td>
                  <td>10-49</td>
                  <td> 3,400</td>
                  <td>30-705</td>
                </tr>

                <tr className="inside-table-text">
                  <td>10,000 Series</td>
                  <td>Disc</td>
                  <td>10-49</td>
                  <td> 4,000</td>
                  <td>10-446</td>
                </tr>
              </tbody>
            </table>
            <br />
          </div>

          <div className="col-md12">
            <MotorForm />
          </div>
        </div>
        <div className="col-md-3">
          <ProductNav />
        </div>
      </div>
    </div>
  );
};

export default GerolerMotor;
