// import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/general.css";
import Head from "next/head";
import Footer from "./components/footer";
import MainNav from "./components/nav-main";
import Link from "next/link";

// Pages
import Interactive from "./interactive";
import Formulas from "./fluid-power-formulas";
import Inventory from "./inventory";
import Thanks from "./thankyou";
import Contact from "./contact-us";

// Products
import DirectionalControlValves from "./products/directional-control-valves";
import FlowControlValves from "./products/flow-control-valves";
import Flowmeters from "./products/flowmeters";
import GearPumps from "./products/gear-pumps";
import GerolerMotor from "./products/geroler-motors";
import HydraulicManifolds from "./products/hydraulic-manifolds";
import PistonPumps from "./products/piston-pumps";
import VaneMotors from "./products/vane-motors";
import VanePumps from "./products/vane-pumps";

// Services
import Laboratory from "./services/fluid-analysis";
import Preventive from "./services/preventive-maintenance-programs";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <Link
          rel="shortcut icon"
          type="image/pgn"
          href="/images/tu-favicon.png"
        />
        >
      </Head>
      <nav>
        <MainNav />
      </nav>
      <Component {...pageProps} />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
