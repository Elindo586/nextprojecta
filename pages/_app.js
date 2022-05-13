// import "../styles/globals.css";
import "../styles/general.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MyApp;
