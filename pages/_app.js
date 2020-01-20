import '../styles/global.css'
// import DataContext from '../components/DataContext';

const Joornalo = ({ Component, pageProps }) => {

  const state = {
    templates: []
  };

  return (
    // <DataContext.Provider value={{ templates: this.state.templates }}>
    <Component {...pageProps} />
    // </DataContext.Provider>
  );
}

export default Joornalo