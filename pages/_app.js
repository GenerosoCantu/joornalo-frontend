import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';
import store from './store';

// import '../styles/global.css'

// const Joornalo = ({ Component, pageProps }) => {

//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }

// export default Joornalo


const _Joornalo = withRedux(store)(
  class _Joornalo extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {}
      }
    }

    // componentDidMount() {
    //   const jssStyles = document.querySelector('#jss-server-side')
    //   if (jssStyles && jssStyles.parentNode) {
    //     jssStyles.parentNode.removeChild(jssStyles)
    //   }
    // }

    render() {
      const {
        Component,
        pageProps,
        store
      } = this.props

      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      )
    }
  }
)

export default _Joornalo