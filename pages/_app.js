import '../styles/global.css'
import ConfigState from '../context/config/configState';

const Joornalo = ({ Component, pageProps }) => {

  return (
    <ConfigState>
      <Component {...pageProps} />
    </ConfigState>
  );
}

export default Joornalo