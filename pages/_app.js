// import "../styles/globals.css";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/general.css";
import Head from "next/head";
import Footer from "./components/footer";
import MainNav from "./components/nav-main";
import Script from "next/script";

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
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="shortcut icon"
            type="image/png"
            href="/images/tu-favicon.png"
          />

          <meta
            name="facebook-domain-verification"
            content="fzctnjbrtlybvytmamk8glkng9af7p"
          />
        </Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-36867189-2"
        />

        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-36867189-2');
            `,
          }}
        />
      </div>

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
