import Navba from '/components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../i18n'
import Lang from 'components/Lang';
function MyApp({ Component, pageProps }) {
  return (
    <div >
<Navba />
<Lang  />
    <Component  {...pageProps} />
    </div>
  );
}

export default MyApp;
