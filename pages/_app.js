import '../styles/global.css'
import ConfigState from '../context/config/configState';
import DataState from '../context/data/dataState';

const Joornalo = ({ Component, pageProps }) => {

  return (
    <ConfigState>
      <DataState>
        <Component {...pageProps} />
      </DataState>
    </ConfigState>
  );
}

export default Joornalo