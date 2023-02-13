import Navba from '/components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
<Navba/>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
