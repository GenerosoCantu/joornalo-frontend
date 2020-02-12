import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux';
import store from './store';
// import { getConfig } from '../store/actions/newsActions';
import { initAgent } from '../services/configService';

import '../styles/global.css'
import '../styles/header.css'
import '../styles/news.css'


const _Joornalo = withRedux(store)(
  class _Joornalo extends App {
    static async getInitialProps({ Component, ctx }) {
      //console.log('+++++++++++++++++++2');
      //await store().dispatch(getConfig());
      //console.log(store().getState());

      const agent = await initAgent(ctx.req);

      return {
        pageProps: Component.getInitialProps
          ? await Component.getInitialProps(ctx, agent)
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