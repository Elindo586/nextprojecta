// import "../styles/globals.css";
import "../styles/general.css";
import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer>
        <p>2022 Edgar </p>
      </footer>
    </div>
  );
}

export default MyApp;
